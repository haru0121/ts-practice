FROM node:22-alpine3.19

WORKDIR /app

COPY ./src/package*.json ./

RUN ls -al
RUN npm install

CMD npm run dev