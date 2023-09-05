# Conexion a base de datos y modelos

## La estructura de carpetas que usarmeos para tener nuestro proyecto.

-src
    -app.js
    -utils
        -database.js
    -models
        -users.model.js   
-.gitignore
-.env


.gitignore (node modules)    


# Variables de Entorno
Instalar dotenv

npm i dotenv

En la raiz del proeycto creamos un archivo .env

En git ingnore agregamos este archivo

node_modules
.env

En el archivo .en agregamos las variables de entorno para la conexion a la base de deatos
>Recuerda cambiar los valores por los tuyos
```Shell
DB_HOST=localhost
DB_USERNAME=postgres
DB_NAME=models_db
DB_PORT=5432
DB_PASSWORD=root
```
