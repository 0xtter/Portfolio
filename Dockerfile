from node:lts-alpine3.17

WORKDIR /app

#Install packages
COPY package.json .

RUN npm install --legacy-peer-deps

#Copy websites files
COPY . .

#build the project
RUN npm run build

#Expose npm default port
EXPOSE 3000

#Start the server
CMD ["npm", "run", "start"]