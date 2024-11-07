function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    }
}

console.log(Pessoa)

// se eu quiser adicionar uma função em vários objetos já criados, posso usar o comando abaixo.
// isso fará com que todos os objetios já criados recebam essa função por herança do protótipo.

Pessoa.prototype.saudar = function() {
    console.log("Olá!");
}


