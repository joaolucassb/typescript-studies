/* eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNamespace {
  export const nomeDoNamespace = 'João';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Lucas');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Lucas');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
