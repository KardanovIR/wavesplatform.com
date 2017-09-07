# Set nginx base image
FROM nginx

# File Author / Maintainer
MAINTAINER Dmitry Shuranov

# Copy custom 500 error page
COPY 500.html /usr/share/nginx/html/500.html

# Copy SSL certs
COPY /etc/ssl/certs/wavesplatform.pem /etc/nginx/wavesplatform.pem
COPY /etc/ssl/private/wavesplatform.key /etc/nginx/wavesplatform.key

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf