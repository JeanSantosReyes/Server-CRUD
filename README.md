# Backend Node - Tutorials
   Instalacion General
   ```
   npm i express dotenv mongoose cors
   ```
1. Iniciar proyecto
   * `npm init -y`
2. Instalar [Nodemon](https://www.npmjs.com/package/nodemon) como administrador para correr proyecto
   * `npm install nodemon -g`
3. Crear archivo `index.js`
4. Modificar scripts de package.json
   * "scripts": { 
        "dev": "nodemon index.js",
        "start": "node index.js" 
    }
5. Levantar proyecto
   * `npm run dev`
6. Instalacion de [express](https://www.npmjs.com/package/express)
   * `npm i express`
7. Para que el backend lea las variables de entorno
   * `npm i dotenv`
8. Instalacion de database [Mongoose](https://mongoosejs.com/)
   * `npm i mongoose`
9. Instalar [Coors](https://www.npmjs.com/package/cors)
    * `npm i cors`

# TESTS API 
* Crear tutorial (POST): `http://localhost:8080/api/tutorials/`
```
{
   "title": "T3",
   "description":"D3"
}
```

* Obtener tutorial por id (GET): `http://localhost:8080/api/tutorials/621cea2abd895aab833e5d56`

* Obtener todos los tutoriales (GET): `http://localhost:8080/api/tutorials/`

* Actualizar tutorial por id (PUT): `http://localhost:8080/api/tutorials/621cea2abd895aab833e5d56`
```
{
   "title": "T3",
   "description":"Actualizado",
   "published": true
}
```

* Buscar por titulo (GET): `http://localhost:8080/api/tutorials?title=j`

* Buscar todos los tutoriales publicados (GET): `http://localhost:8080/api/tutorials/published`

* Eliminar tutorial por id (DELETE): `http://localhost:8080/api/tutorials/621cea2abd895aab833e5d56`

* Eliminar todos los tutoriales (DELETE): `http://localhost:8080/api/tutorials/`