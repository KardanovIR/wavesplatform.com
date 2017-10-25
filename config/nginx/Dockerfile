# Set nginx base image
FROM nginx

# Copy custom 500 error page
COPY 500.html /usr/share/nginx/html/500.html

# Copy SSL certs
COPY wavesplatform.pem /etc/nginx/wavesplatform.pem
COPY wavesplatform.key /etc/nginx/wavesplatform.key

# Copy template configuration file from the current directory
COPY nginx.template.conf /etc/nginx/nginx.template.conf

# Apply environment variables and launch
CMD envsubst '$SERVER_NAME' < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf && nginx