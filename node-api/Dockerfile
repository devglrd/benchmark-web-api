FROM node:8

RUN mkdir /stein-api

WORKDIR /stein-api

COPY ./ /stein-api

RUN npm i && npm i -g pm2 && npm run tsc

CMD ["pm2-runtime", "build/index.js"]

EXPOSE $APP_PORT
