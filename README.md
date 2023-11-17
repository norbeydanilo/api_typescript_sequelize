# Basic API REST

Node.js, Express.js, MySQL, Sequelize and Typescript Basic REST API.

You can clone this repo as starter project for your Express, MySQL API server

## Features and Functionalities 😃

- Node, Express, Typescript, MySQL and Sequelize as ORM Basic REST API
- CRUD Operations (A Controller for this)
- SQL for database: Relational MySQL - Use ORM Sequelize

## Tech Stack 💻

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com)
- [Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Sequelize](https://sequelize.org)

## Installation and Running App :zap:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/norbeydanilo/api_typescript_sequelize.git
 cd api_typescript_sequelize
```

**2. Install the required package :-**

```bash
 npm install
```

**3. Now run the npm command to start the project :-**

```bash
 npm run dev
```

**4.** **🎉 Open postman and test the rest api on this url `https://127.0.0.1:3000`**

Remember that the `.env` file must be created for the API to work.

Additionally this project uses: 

- [TS-Nodemon](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)

### Swagger and Running

Debes tener creada unicamente la base de datos. El ORM se encarga del mapeo entre la especificación en código y la base de datos MySQL.

La base de datos para este ejemplo se llama `todo`.

Debes tener instalado Swagger.

```bash
npm install swagger-jsdoc swagger-ui-express
npm install @types/swagger-ui-express @types/swagger-jsdoc --save-dev
```

Luego debes importarlo en el proyecto en `app.ts`:

```typescript
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./src/swagger.json";
```

Si te aparece el problema de `Cannot find module './src/swagger.json` es por la importación de un archivo JSON en TypeScript.

En TypeScript, por defecto, no se pueden importar archivos JSON directamente. Para solucionar este problema, debes habilitar la opción `--resolveJsonModule` en tu archivo de configuración de TypeScript (`tsconfig.json`).

Finalmente agrega la ruta para la documentación con Swagger.

```typescript
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Con esto, podrás acceder a la documentación de Swagger en la ruta `/api-docs` de tu aplicación.

Por favor, ten en cuenta que este es un ejemplo básico y puedes necesitar ajustarlo según tus necesidades. Por ejemplo, puedes querer agregar autenticación a la ruta de la documentación de Swagger, o puedes tener otros middlewares que necesiten ser configurados. Te recomiendo que consultes la [documentación de `swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) para obtener más detalles.