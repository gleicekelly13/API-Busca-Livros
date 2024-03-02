const express = require('express');
const app = express();

const { buscarLivros } = require("./servicos/servico");

app.get('/livros', (req, res) => {
    res.json(buscarLivros());
});

app.get('/livros/:id', (req, res) => {
    let id= parseInt(req.params.id);
    let idLivro = buscarLivrosPorId(id);

    res.json(idLivro);
});

app.listen(3000, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});
