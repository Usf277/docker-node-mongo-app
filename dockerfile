# Use official Node.js base image
FROM node:slim

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
