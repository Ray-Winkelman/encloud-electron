#!/bin/sh

cd /home/ray/Source/encloud-electron/

node ./hooks/versioner.js $(git rev-list HEAD --count)
sleep 2s
git add ./package.json
