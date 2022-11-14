# build file docker build -t enerweb/nex-billing-api .
FROM node:16-alpine AS builder
WORKDIR "/app"
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

FROM nginx:1.23.1-alpine AS production

# Expose an override these when the container is built
ENV DEBUG=false
ENV VERSION=0.0.0
ENV API_URL=http://localhost:3000
ENV GRAPHQL_URL=http://localhost:8080/v1/graphql
ENV GOOGLE_MAPS_API=XXXXXXXXXXXXXXXXXXXXXXXXXX

WORKDIR "/app"

# copy application files
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/lusty /usr/share/nginx/html

#expose docker port
EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
