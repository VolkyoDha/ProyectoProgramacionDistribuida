# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Copia el archivo .env
COPY .env .env

# Expone el puerto que la aplicación usará
EXPOSE 5001

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]
