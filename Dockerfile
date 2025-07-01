# Usa Node 22 slim (último LTS)
FROM node:22-slim

# Define ambiente de desenvolvimento
ENV NODE_ENV=development

# Cria diretório dentro do container
WORKDIR /usr/src/app

# Copia arquivos de dependência e instala
COPY package*.json ./
COPY yarn.lock ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta usada pelo NestJS
EXPOSE 3000

# Comando de execução em modo dev
CMD ["npm", "run", "start:dev"]