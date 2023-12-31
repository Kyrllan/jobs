const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({extended: false}));

// db connection
db.authenticate()
  .then(() => {
    console.log('Conectou o banco com sucesso 3');
  })
  .catch((error) => {
    console.log('Ocorreu um erro ao conectar', error);
  });

// routes
app.get('/', (req, res) => {
  res.send('Está funcionando');
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));
