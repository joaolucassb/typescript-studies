interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'João',
  sobrenome: 'Lucas',
  idade: 25,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 25,
};

const aluno3: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);
