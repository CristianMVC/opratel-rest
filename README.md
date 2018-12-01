# opratel-rest
## Instalacion

- npm install (desde el directorio donde se encuentra package.json)

## Configurar

- Ingresar en node_modules/modelo/config.js
  (La base de datos es la misma que la de php)

 host: '...', 
 user: '...',  
 password: '...', 
 database: '...'

## levantar servidor 

- npm start


## Consultas

Via postman o cualquier otro cliente rest:

#addUser:  PUT/ http://localhost:8080/addUser?{username,password,email}
#getUser:  GET/ http://localhost:8080/getUser/{username}
#activateUser: POST/ http://localhost:8080/activateUser?{username}
#deactivateUser: POST/ http://localhost:8080/deactivateUser:?{username}



