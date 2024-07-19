# Usa la imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install -g express-gateway

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Expone el puerto que el servicio usará
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
