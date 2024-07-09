FROM node:21.1.0-alpine

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install

COPY . .

CMD ["node", "index.js"]