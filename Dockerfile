FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@latest && npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]

EXPOSE 3000
