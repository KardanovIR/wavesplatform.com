FROM node:10.12.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/


# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app


# build frontend and backend
RUN cd /opt/app && npm run build:be-prod
RUN npm run build:fe-prod

EXPOSE 3001

ENV NODE_ENV production

CMD ["node", "dist/app.js"]
