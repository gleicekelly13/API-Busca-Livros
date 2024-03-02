const { livros } = require('../dados/livros');

function buscarLivros() {
    return livros;
};

function buscarLivrosPorId(id) {
    let livroId = livros.find((livro) => livro.id ===id)
    return livroId;
}

exports.buscarLivros = buscarLivros;
exports.buscarLivrosPorId = buscarLivrosPorId;
