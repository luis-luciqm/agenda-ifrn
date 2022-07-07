#!/bin/bash

echo "Digite o commit para fazer o push: "
read commit

git add .
git commit -m "$commit"
git push 

sleep 2
clear 

git status

sleep 3
clear