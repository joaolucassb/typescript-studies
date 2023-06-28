type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Lucas',
  idade: 25,
};

console.log(pessoa);

// Module mode
export { pessoa };
