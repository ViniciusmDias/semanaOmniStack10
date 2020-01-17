const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

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

app.listen(3333);