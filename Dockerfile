FROM node:8.6-alpine

# install git
RUN apk add --no-cache git

# create app folder
RUN mkdir /app
WORKDIR /app
COPY . /app

# install dependencies
RUN cd /app 
RUN npm install

# build for distribution
RUN npm build

EXPOSE 8080