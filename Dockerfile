# Multi-stage Dockerfile for building the Vite React app and serving with nginx
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# copy package information first for cached installs
COPY package*.json ./
# If you use pnpm, copying pnpm-lock.yaml is useful. Copy everything to ensure build artifacts exist.
COPY . .

RUN if [ -f package-lock.json ]; then \ 
    npm ci --silent; \
    else \
    npm install --silent; \
    fi

RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (handles SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
