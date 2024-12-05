# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json separately
COPY package.json ./
COPY package-lock.json ./

# Install dependencies using ci for clean install
RUN npm ci

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
