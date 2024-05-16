param(
    $message
)

if (!$message) {
    throw "forgot message"
}

git add *
git commit -m $message
git push