FROM node:18.16.1-bullseye

USER root
RUN npm i -g npm@latest vercel
RUN apt-get update && apt-get -y install vim git

USER node
WORKDIR /home/node/app
