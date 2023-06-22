/* eslint-disable */

// Tipos básicos (Aqui ocorre inferência de tipos)
let nome: string = 'João'; // Qualquer tipo de strings: '' "" ``
let idade: number = 25; // 10, 1.75, -5.55. 0xf00d, 0b1010...
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
export let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: 'Luiz'
};

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
