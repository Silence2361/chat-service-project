# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Ensure the .env file is also copied
COPY .env .env

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 9000

# Command to run the application
CMD ["npm", "run", "start:prod"]
