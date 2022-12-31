#!/bin/bash

yarn build
git add .

read -p 'Commit message: ' message

git commit -m "$message"
git push origin master
git subtree push --prefix dist origin gh-pages
