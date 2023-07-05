// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Lucas',
  enderecos: ['Av. Brasil'],
  idade: 25,
};

console.log(pessoa);
