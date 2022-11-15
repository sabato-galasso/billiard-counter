FROM node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build --prod
EXPOSE 8080
ENV PORT=8080
CMD [ "node", "app.js" ]
