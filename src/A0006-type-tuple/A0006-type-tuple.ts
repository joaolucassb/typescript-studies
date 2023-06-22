// tuple
const dadosCliente1: readonly [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Santos'];
const dadosCliente3: [number, string, string?] = [1, 'Lucas'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Luiz';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array: readonly string[] = ['João', 'Lucas'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array);
console.log(array2);
