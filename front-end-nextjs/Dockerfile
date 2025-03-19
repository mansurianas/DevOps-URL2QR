# Stage 1: Builder with full Node.js environment
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for optimal caching
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies)
RUN npm ci --no-audit --prefer-offline

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy built assets and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]