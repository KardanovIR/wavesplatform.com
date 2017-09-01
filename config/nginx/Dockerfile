# Set nginx base image
FROM nginx

# File Author / Maintainer
MAINTAINER Dmitry Shuranov

# Copy custom 500 error page
COPY 500.html /usr/share/nginx/html/500.html

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf