set_task_perms(player);
try
  eval_code = argstr;
  if (length(eval_code) > 0 && eval_code[1] == ";")
    eval_code = eval_code[2..$];
  else
    if (length(eval_code) < 6 || eval_code[1..6] != "return")
      eval_code = "return " + eval_code;
    endif
  endif
  eval_code = "me = " + toliteral(player) + "; here = " + toliteral(player.location) + ";" + eval_code;
  if (eval_code[$] != ";")
    eval_code = eval_code + ";";
  endif
  {code, result} = eval(eval_code + ";");
  if (code)
    if (typeof(result) == OBJ)
      notify(player, tostr("=> ", result.name, " (", toliteral(result), ")"));
    else
      notify(player, tostr("=> ", toliteral(result)));
    endif
  else
	  for line in (result)
	    notify(player, line);
	  endfor
  endif
except ex (ANY)
  {line, @lines} = ex[4];
  notify(player, tostr(line[4], ":", line[2], (line[4] != line[1]) ? tostr(" (this == ", line[1], ")") | "", ", line ", line[6], ":  ", ex[2]));
  for line in (lines)
    notify(player, tostr("... called from ", line[4], ":", line[2], (line[4] != line[1]) ? tostr(" (this == ", line[1], ")") | "", ", line ", line[6]));
  endfor
  notify(player, "(End of traceback)");
endtry