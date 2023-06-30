export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Lucas', 25);
funcao.apply(new Date(), ['Lucas', 25]);
