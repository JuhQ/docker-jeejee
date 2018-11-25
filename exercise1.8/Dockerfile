FROM ubuntu:16.04


WORKDIR /mydir


RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs

RUN npm i -g lodash moment juha




# docker build -t nodebest .
# docker run -d -t nodebest
