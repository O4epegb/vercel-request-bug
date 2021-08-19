FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .

CMD [ "yarn", "start" ]
