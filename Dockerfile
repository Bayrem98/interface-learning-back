# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json files to leverage Docker cache
COPY package*.json ./

# Install npm dependencies. We use a single RUN command to reduce the number of layers.
# Also, we explicitly set the registry to npmjs.com to avoid potential network issues.
RUN npm --registry https://registry.npmjs.com install

# Copy the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
