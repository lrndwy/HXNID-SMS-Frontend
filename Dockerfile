# Stage 1: Build the application
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application with a lightweight web server
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the built application from the build-stage
COPY --from=build-stage /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist"]
