# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Install app dependencies with the legacy-peer-deps option
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

# Install rimraf globally
RUN npm install -g rimraf

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
