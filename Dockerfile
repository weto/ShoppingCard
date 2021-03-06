FROM node:10-alpine

RUN apk add --no-cache git

RUN apk add --no-cache openssh

RUN git clone https://github.com/weto/ShoppingCard.git

WORKDIR /ShoppingCard

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]
