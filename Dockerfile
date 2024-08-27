FROM node:18

WORKDIR /src
COPY package.json ./
RUN npm install && npm run install-common && npm run install-database
COPY . .

CMD ["npm" , "start"]