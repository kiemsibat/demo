FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm","run", "migration:run" ]
ENTRYPOINT [ "npm","run", "start:dev" ]

