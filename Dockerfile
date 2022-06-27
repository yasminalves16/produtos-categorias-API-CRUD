FROM node:16

RUN apt-get update

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

USER node

CMD ["yarn", "start"]