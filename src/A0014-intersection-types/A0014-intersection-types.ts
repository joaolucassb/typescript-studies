type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Lucas',
  idade: 25,
};

console.log(pessoa);

// Module mode
export { pessoa };
