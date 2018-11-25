FROM ubuntu:16.04

EXPOSE 1337

WORKDIR /mydir

COPY index.js .

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs

CMD node index.js



# docker build -t juhqbest .
# docker run -d -p 1337:1337 -t juhqbest
