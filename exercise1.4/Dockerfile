FROM ubuntu:16.04

EXPOSE 5000

WORKDIR /mydir

COPY clones/frontend-example-docker .

ENV API_URL=http://localhost:8000

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs

RUN npm i
RUN npm i -g serve
RUN npm run build
CMD serve -s -l 5000 dist



# docker build -t myfirst .
# docker run -d -p 5000:5000 -t myfirst
