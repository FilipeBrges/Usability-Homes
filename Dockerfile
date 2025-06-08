FROM node:22.8.0-alpine3.20
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "run", "dev"]