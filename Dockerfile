FROM mhart/alpine-node:4

WORKDIR /src
ADD . /src

# If you have native dependencies, you'll need extra tools
RUN apk add --no-cache make gcc g++ python git

# If you need npm, don't use a base tag
RUN npm install --production

EXPOSE 8080

CMD ["npm", "start"]
