FROM node:10.13.0-alpine
RUN apk --no-cache add git

# Working DIR
WORKDIR /usr/src/app

# Copy everything from current Folder
COPY . ./

# Set the env variables
ARG CONFIG_ID
RUN echo "CONFIG_ID=$CONFIG_ID"

# Running required steps to prepare the app prod build
RUN npm install \
  && npm run build \
  && rm -rf node_modules \
  && rm -rf src \
  && rm -rf docs \
  && rm -rf public \
  && rm package.json \
  && npm install serve \
  && apk del git

EXPOSE 3000

# Serve the prod build from the dist folder
CMD ["./node_modules/.bin/serve", "dist", "-p", "3000"]
