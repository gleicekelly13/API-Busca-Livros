const { livros } = require('../dados/livros');

function buscarLivros() {
    return livros;
};

function buscarLivrosPorNome(titulo) {
    let livroBuscado = livros.filter((livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    return livroBuscado;
};

function buscarLivrosPorId(id) {
    let livroId = livros.find((livro) => livro.id === id)
    return livroId;
};

exports.buscarLivros = buscarLivros;
exports.buscarLivrosPorNome = buscarLivrosPorNome;
exports.buscarLivrosPorId = buscarLivrosPorId;
