// CLASSES - é como uma forma para criar objetos

class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log("Olá!, eu sou " + this.nome);
    }
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa1 = new Pessoa("Lucas",1988,"programador");

// HERANÇA COM CLASSES

class Estudante extends Pessoa {
    #matricula;
    notas = [];
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante"); // aqui estamos fixando a profissao estudante para o aluno não precisar informar
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula
    };
    setMatricula(valor) {
        this.#matricula = valor;
    }
    ola() {
        super.ola(); // está chamando primeiro o ola() do pai
        console.log("colegas!");
    }; // depois chama o olá daqui
};

const aluno1 = new Estudante("Júlio", 1999, 31423488);

class Nota {
    #grau;
    constructor (disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };
    setGrau(valor) {
        if (valor < 0 || valor > 10) {
            throw new Error();
        }
        this.#grau = valor;
    }
    getGrau() {
        this.#grau;
    }
};

aluno1.notas = [new Nota("OO", 10),new Nota("Algoritmos", 8),new Nota("Cálculo", 7)]