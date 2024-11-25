# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy app files
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ .

# Expose application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
