enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
