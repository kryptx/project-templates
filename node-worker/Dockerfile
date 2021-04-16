FROM node:14-alpine

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile
RUN yarn test
RUN yarn --production --frozen-lockfile

CMD [ "yarn", "start" ]
