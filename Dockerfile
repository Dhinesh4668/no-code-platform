FROM node:ubuntu as builder

WORKDIR ./app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run dev


# nginx 
FROM nginx:ubuntu 

# Copy the built React app from the builder stage to the nginx directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]