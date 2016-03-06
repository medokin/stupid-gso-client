FROM node:0.12-onbuild

RUN npm install ember-cli bower node-static -g

run bower install --allow-root

run ember build

EXPOSE 8080

cmd static dist -a 0.0.0.0
