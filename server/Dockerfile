FROM node:14-alpine

RUN apk add --no-cache wget

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
