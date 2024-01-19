# FrontEnd Technical Test

Este proyecto es una prueba técnica Frontend diseñada para demostrar habilidades en el desarrollo de aplicaciones Angular. La aplicación se centra en proporcionar una interfaz de usuario interactiva y atractiva que interactúa con una API externa para mostrar y manejar datos dinámicamente.

## Instrucciones para Ejecutar el Proyecto Localmente

### Requisitos

Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema.

### Instalación y Ejecución

1. Descomprime el archivo `.zip` en tu directorio local.
2. Navega al directorio del proyecto descomprimido.
3. Instala las dependencias del proyecto ejecutando:
```bash
   npm install
```
4. Inicia el servidor de desarrollo con:
```bash
   npm start
```
5. Accede a la aplicación en `http://localhost:4200/`.

## Uso del Proxy en Desarrollo Local

Este proyecto utiliza un proxy para resolver problemas de CORS durante las solicitudes a la API externa en el entorno de desarrollo. La configuración del proxy se encuentra en el archivo `proxy.conf.json`.

### Modificación de la Configuración del Proxy

Para adaptar la configuración del proxy, por ejemplo, para apuntar a una API diferente:

1. Abre `proxy.conf.json`.
2. Modifica las entradas según sea necesario.
3. Guarda los cambios y reinicia el servidor de desarrollo.
