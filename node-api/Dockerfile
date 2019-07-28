FROM node:11

RUN mkdir /stein-api

WORKDIR /stein-api

COPY ./ /stein-api

RUN npm i && npm i -g pm2 && npm run tsc

CMD ["pm2-runtime", "start", "ecosystem.config.js", "-i", "max"]

EXPOSE $APP_PORT
