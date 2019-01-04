FROM node:10-alpine

# RUN apk update && apk upgrade && apk add git

WORKDIR /app

COPY package*.json ./
COPY index.js .

RUN npm install --only=production

CMD ["node", "index.js"]
