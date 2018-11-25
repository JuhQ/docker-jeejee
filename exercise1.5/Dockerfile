FROM ubuntu:16.04

EXPOSE 8000

WORKDIR /mydir

COPY clones/backend-example-docker .

ENV FRONT_URL=http://localhost:5000/

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs
RUN npm i
CMD npm start



# docker build -t mysecond .
# docker run -d -p 8000:8000 -t mysecond
