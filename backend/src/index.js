const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket.js')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//MongoDb (Não-relacional)
mongoose.connect('mongodb+srv://omnistack10:omnistack@omnistack10-9dxnh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//.use válida para todas as rotas da aplicação
app.use(cors())
app.use(express.json());
app.use(routes)

// GET, POST, PUT, DELETE 

// Query Params: request.query  (filtros, ordenação, páginação) incorporados na URL 
// Route Params: request.params identificar um recurso na alteração ou remoção
// Body: request.body dados para criação ou alteração de um registro

server.listen(3333);