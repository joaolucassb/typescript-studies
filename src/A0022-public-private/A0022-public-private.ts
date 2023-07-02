export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicioaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    // Nesse tipo de criação de classes é necessário informar se é public, private, etc..
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
