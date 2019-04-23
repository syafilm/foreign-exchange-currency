FROM node:11.7.0

RUN mkdir /usr/src/foreignexchange
WORKDIR /usr/src/foreignexchange

ENV PATH /usr/src/foreignexchange/node_modules/.bin:$PATH

COPY package.json /usr/src/foreignexchange/package.json
RUN yarn install --silent

CMD ["yarn", "start"]