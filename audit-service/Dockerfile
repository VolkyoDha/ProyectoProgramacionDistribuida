# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 5011

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]
