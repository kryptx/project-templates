#!/bin/bash
read -p 'App name: ' APP_NAME
find . -type f -name "*" -print0 | xargs -0 sed -i '' -e 's/_APP_NAME_/$APP_NAME/g'
echo "Your project has been initialized. You can now delete this file."
