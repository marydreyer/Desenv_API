const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

const filmeRota = require('./rotas/filmes_rota');
app.use('/api/filmes', filmeRota);

const usersRota = require('./rotas/users_rota');
app.use('/api/users', usersRota);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


