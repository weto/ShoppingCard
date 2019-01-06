FROM node:10-alpine

RUN apk add --no-cache git

RUN apk add --no-cache openssh

RUN git clone https://github.com/weto/produto.git

WORKDIR /produto

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
