const express = require('express'); /*importação do express */

const cors =require('cors');

const routes = require('./routes');

const app = express(); 

app.use(cors());
app.use(express.json());

app.use(routes);

/* Express => armaneza a aplicação, rotas e funcionalidades*/
/* ROTA/RECURSOS
O app.get irá nos direcionar para uma rota específica, exemplo: se eu adicionar o recurso(entidade
  da aplicação, no caso do users, seria um recurso da app onde estariam os usuários.)
 /users ao
elemento app.get, ele irá nos direcionar para rota => localghost:3333/users do site.
*/

/* Métodos HTTP:
* GET: SERVE PARA BUSCAR UMA INFORMAÇÂO DO BACK-END
* POST: CRIA UMA INFORMAÇÃO NO BACK-END
* PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
* DELETE: DELETAR UMA INFORMAÇÃO DO BACK-END
*/

/* TIPOS DE PARÂMETROS
* Query params: Parâmetros nomeados enviados na rota após o "?" (serve para filtros, paginação)
* Route params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar um recurso
*/

/* Banco de Dados
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NOSQL: MongoDB, CouchDB, etc
*/

/* 
* Driver: Selecter * FROM THE SERVER
* Query Builder: table('users').selector('*').where()
*/




app.listen(3333); /* ver a resposta da app, através do localhost*/