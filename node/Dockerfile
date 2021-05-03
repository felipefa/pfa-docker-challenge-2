FROM node:alpine

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENV PORT=3000
ENV MYSQL_HOST=pfa-2-mysql
ENV MYSQL_DATABASE=pfa_docker
ENV MYSQL_ROOT_USER=root
ENV MYSQL_ROOT_PASSWORD=root

WORKDIR /usr/src/app
RUN chown -R node /usr/src/app

COPY package.json yarn.lock ./
RUN yarn
RUN npm install -g nodemon

USER node
EXPOSE 3000

ENTRYPOINT [ "dockerize", "--wait", "tcp://pfa-2-mysql:3306", "-timeout", "50s" ]
CMD [ "yarn", "dev" ]