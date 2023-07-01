// forma longa de criação de classes
export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // é um método public
  adicioaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// forma abreviada de criação de classes
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('João', 'Santos');
const colaborador2 = new Colaborador('Maria', 'Júlia');
const colaborador3 = new Colaborador('Luiz', 'Otávio');
empresa1.adicioaColaborador(colaborador1);
empresa1.adicioaColaborador(colaborador2);
empresa1.adicioaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
