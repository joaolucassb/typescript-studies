function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'João',
  sobrenome: 'Lucas',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('João', 'Lucas');
pessoa.exibirNome();

export { pessoa };
