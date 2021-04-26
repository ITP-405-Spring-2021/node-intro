FROM node:14.16.1

WORKDIR /app

COPY ./* ./

RUN npm install

EXPOSE 8000

CMD [ "node", "docker-express-app.js"]
