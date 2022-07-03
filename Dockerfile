FROM node:16

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY 'package.json' .

RUN yarn

COPY . .

CMD ["yarn", "dev"]