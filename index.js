const express = require('express');
const app = express();

const { buscarLivros, buscarLivrosPorNome, buscarLivrosPorId } = require("./servicos/servico");

app.get('/livros', (req, res) => {
    let titulo = req.query.titulo;
    let buscaLivro = titulo ? buscarLivrosPorNome(titulo) : buscarLivros();
    
    if(buscaLivro.length > 0) {
        res.json(buscaLivro);
    } else {
        res.status(404).json({'Erro' : 'Livro não encontrado'});
    }
    
});

app.get('/livros/:id', (req, res) => {
    let id= parseInt(req.params.id);
    let idLivro = buscarLivrosPorId(id);

    if(idLivro) {
        res.json(idLivro);
    } else {
        res.status(404).json({'Erro' : 'ID inexistente'});
    }
});

app.listen(3000, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});
