this:_ensure_instance();
{statement} = args;
ticks_left() < 10000 || seconds_left() < 2 && suspend(0);
if (statement.type == "variable")
  return this:_lookup(statement.value);
elseif (statement.type == "unique")
  return this:_generate(statement.value);
elseif (isa(statement, this.plastic.sign_operator_proto))
  if (statement.type == "unary")
    return tostr(statement.value == "-" ? "-" | "", this:p(statement.first));
  else
    return tostr("(", this:p(statement.first), " ", statement.value, " ", this:p(statement.second), ")");
  endif
elseif (isa(statement, this.plastic.control_flow_statement_proto))
  if ((first = statement.first) != 0)
    return {tostr(statement.id, " " , this:p(first), ";")};
  else
    return {tostr(statement.id, ";")};
  endif
elseif (isa(statement, this.plastic.if_statement_proto))
  value =  statement.value;
  code = {tostr("if (", this:p(value[1]), ")")};
  for s in (value[2])
    if (respond_to(s, "std"))
      code = {@code, @this:p(s)};
    else
      code = {@code, this:p(s) + ";"};
    endif
  endfor
  i = 3;
  while (length(value) >= i && typeof(value[i]) != LIST)
    code = {@code, tostr("elseif (", this:p(value[i]), ")")};
    i = i + 1;
    for s in (value[i])
      if (respond_to(s, "std"))
        code = {@code, @this:p(s)};
      else
        code = {@code, this:p(s) + ";"};
      endif
    endfor
    i = i + 1;
  endwhile
  if (length(value) == i)
    code = {@code, "else"};
    for s in (value[i])
      if (respond_to(s, "std"))
        code = {@code, @this:p(s)};
      else
        code = {@code, this:p(s) + ";"};
      endif
    endfor
  endif
  code = {@code, "endif"};
  return code;
elseif (isa(statement, this.plastic.for_statement_proto))
  value =  statement.value;
  if (statement.subtype == "range")
    code = {tostr("for ", this:p(value[1]), " in [", this:p(value[2]), "..", this:p(value[3]), "]")};
    statements = value[4];
  elseif (length(value) == 4)
    code = {tostr("for ", this:p(value[1]), ", ", this:p(value[2]), " in (", this:p(value[3]), ")")};
    statements = value[4];
  else
    code = {tostr("for ", this:p(value[1]), " in (", this:p(value[2]), ")")};
    statements = value[3];
  endif
  for s in (statements)
    if (respond_to(s, "std"))
      code = {@code, @this:p(s)};
    else
      code = {@code, this:p(s) + ";"};
    endif
  endfor
  code = {@code, "endfor"};
  return code;
elseif (isa(statement, this.plastic.loop_statement_proto))
  value =  statement.value;
  i = 0;
  if (length(value) > 2)
    prefix = tostr("while ", this:p(value[i = i + 1]));
  else
    prefix = tostr("while");
  endif
  if (statement.id == "while")
    code = {tostr(prefix, " (", this:p(value[i = i + 1]), ")")};
  else
    code = {tostr(prefix, " (!(", this:p(value[i = i + 1]), "))")};
  endif
  for s in (value[i = i + 1])
    if (respond_to(s, "std"))
      code = {@code, @this:p(s)};
    else
      code = {@code, this:p(s) + ";"};
    endif
  endfor
  code = {@code, "endwhile"};
  return code;
elseif (isa(statement, this.plastic.fork_statement_proto))
  value =  statement.value;
  i = 0;
  if (length(value) > 2)
    code = {tostr("fork ", this:p(value[i = i + 1]), " (", this:p(value[i = i + 1]), ")")};
  else
    code = {tostr("fork", " (", this:p(value[i = i + 1]), ")")};
  endif
  for s in (value[i = i + 1])
    if (respond_to(s, "std"))
      code = {@code, @this:p(s)};
    else
      code = {@code, this:p(s) + ";"};
    endif
  endfor
  code = {@code, "endfork"};
  return code;
elseif (isa(statement, this.plastic.try_statement_proto))
  value =  statement.value;
  code = {"try"};
  for s in (value[1])
    if (respond_to(s, "std"))
      code = {@code, @this:p(s)};
    else
      code = {@code, this:p(s) + ";"};
    endif
  endfor
  if (statement.subtype == "finally")
    code = {@code, "finally"};
    for s in (value[2])
      if (respond_to(s, "std"))
        code = {@code, @this:p(s)};
      else
        code = {@code, this:p(s) + ";"};
      endif
    endfor
  else
    for value in (value[2..$])
      if (length(value) == 3)
        x = {};
        for s in (value[2])
          x = {@x, this:p(s)};
        endfor
        code = {@code, tostr("except ", this:p(value[1]), " (", x:join(", "), ")")};
        statements = value[3];
      else
        x = {};
        for s in (value[1])
          x = {@x, this:p(s)};
        endfor
        code = {@code, tostr("except (", x:join(", "), ")")};
        statements = value[2];
      endif
      for s in (statements)
        if (respond_to(s, "std"))
          code = {@code, @this:p(s)};
        else
          code = {@code, this:p(s) + ";"};
        endif
      endfor
    endfor
  endif
  code = {@code, "endtry"};
  return code;
elseif (isa(statement, this.plastic.assignment_operator_proto))
  if (statement.first.type == "pattern")
    res = "{";
    rest = 0;
    for v in (statement.first.value)
      if (v.type == "unary")
        v = tostr("@", this:p(v.first));
      elseif (v.type == "binary")
        v = tostr("?", this:p(v.first), " = ", this:p(v.second));
      else
        v = this:p(v);
      endif
      res = tostr(res, (rest ? ", " | ""), v);
      rest = 1;
    endfor
    res = tostr(res, "}");
    return tostr("(", res, " ", statement.value, " ", this:p(statement.second), ")");
  else
    return tostr("(", this:p(statement.first), " ", statement.value, " ", this:p(statement.second), ")");
  endif
elseif (isa(statement, this.plastic.bracket_operator_proto))
  if (statement.type == "ternary")
    return tostr("(", this:p(statement.first), "[", this:p(statement.second), "..", this:p(statement.third), "])");
  elseif (statement.type == "binary")
    return tostr("(", this:p(statement.first), "[", this:p(statement.second), "])");
  else
    res = "[";
    first = 1;
    for v in (statement.value)
      ticks_left() < 10000 || seconds_left() < 2 && suspend(0);
      res = tostr(res, (first ? "" | ", "), this:p(v[1]), " -> ", this:p(v[2]));
      first = 0;
    endfor
    res = tostr(res, "]");
    return res;
    return {res};
  endif
elseif (isa(statement, this.plastic.brace_operator_proto))
  res = "{";
  first = 1;
  for v in (statement.value)
    ticks_left() < 10000 || seconds_left() < 2 && suspend(0);
    res = tostr(res, (first ? "" | ", "), this:p(v));
    first = 0;
  endfor
  res = tostr(res, "}");
  return res;
elseif (isa(statement, this.plastic.invocation_operator_proto))
  if (statement.type == "ternary")
    a = {};
    for v in (statement.third)
      a = {@a, this:p(v)};
    endfor
    if (statement.second.type == "identifier")
      return tostr(this:p(statement.first), ":", this:p(statement.second), "(", a:join(", "), ")");
    else
      return tostr(this:p(statement.first), ":(", this:p(statement.second), ")(", a:join(", "), ")");
    endif
  elseif (statement.type == "binary")
    a = {};
    for v in (statement.second)
      a = {@a, this:p(v)};
    endfor
    return tostr(this:p(statement.first), "(", a:join(", "), ")");
  else
    return tostr(this:p(statement.first));
  endif
elseif (isa(statement, this.plastic.property_selector_operator_proto))
  if (statement.second.type == "identifier")
    return tostr(this:p(statement.first), ".", this:p(statement.second));
  else
    return tostr(this:p(statement.first), ".(", this:p(statement.second) + ")");
  endif
elseif (isa(statement, this.plastic.error_catching_operator_proto))
  if (statement.type == "unary")
    return tostr(statement.value, this:p(statement.first));
  endif
  x = {};
  for s in (statement.second)
    x = {@x, this:p(s)};
  endfor
  second = x:join(", ");
  if (statement.type == "ternary")
    return tostr("`", this:p(statement.first), " ! ", second, " => ", this:p(statement.third), "'");
  else
    return tostr("`", this:p(statement.first), " ! ", second, "'");
  endif
elseif (isa(statement, this.plastic.literal_proto))
  return toliteral(statement.value);
elseif (isa(statement, this.plastic.positional_symbol_proto))
  return statement.value;
elseif (isa(statement, this.plastic.prefix_operator_proto))
  return tostr(statement.value, this:p(statement.first));
elseif (isa(statement, this.plastic.infix_operator_proto))
  value = statement.value;
  value = (value != "**") ? value | "^";
  return tostr("(", this:p(statement.first), " ", value, " ", this:p(statement.second), ")");
elseif (isa(statement, this.plastic.traditional_ternary_operator_proto))
  return tostr("(", this:p(statement.first), " ? ", this:p(statement.second), " | ", this:p(statement.third), ")");
elseif (isa(statement, this.plastic.name_proto))
  return statement.value;
else
  raise(E_INVARG);
endif