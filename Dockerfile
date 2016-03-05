FROM node:5

RUN npm install ember-cli@2.4.1 bower node-static -g

run bower install --allow-root

run ember build

EXPOSE 8080

cmd static dist -a 0.0.0.0
