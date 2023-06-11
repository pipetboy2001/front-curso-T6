// Mostrar en consola la secuencia de Fibonacci: 
// Entre los números 0 y 1000.
let fibo = [0, 1];
// hasta que la secuencia sea menor o igual a 1000
for (let i = 2; fibo[i - 1] + fibo[i - 2] <= 1000; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// Obtener los elementos con los IDs correspondientes en el HTML
let fibonacciResultElement = document.getElementById("fibonacciResult");
// Mostrar en el HTML la secuencia de Fibonacci
fibonacciResultElement.innerHTML = fibo;


// Números pares entre 0 y 1000
//usando el resultado de fibo 
let pares = fibo.filter(function (fibo) {
    return fibo % 2 == 0;
    }
);
console.log(pares);
let paresResultElement = document.getElementById("paresResult");
// Mostrar en el HTML los números pares
paresResultElement.innerHTML = pares;

// Números impares entre 0 y 1000
let impares = fibo.filter(function (fibo) {
    return fibo % 2 !== 0; // Filtrar los números impares
});
console.log(impares);
let imparesResultElement = document.getElementById("imparesResult");
// Mostrar en el HTML los números impares
imparesResultElement.innerHTML = impares;

//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 
let pokemon =
    [
        'Pikachu',
        'Charmander',
        'Bulbasaur',
        'Squirtle'
    ]

let pokemonMayusculas = pokemon.map(function (pokemon) {
    let NewpokemonMayusculas = pokemon.toUpperCase();
    return NewpokemonMayusculas;
    }
);
console.log(pokemonMayusculas);
let outputElement2 = document.getElementById("pregunta2");
outputElement2.textContent = `Pokémon en mayúsculas: ${pokemonMayusculas}`;


//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.
let pokemon2 = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
// filtamos los pokemon tipo fuego 
let pokemonFuego = pokemon2.filter(function (pokemon2) {
    return pokemon2.tipo == 'Fuego';
    }
);
console.log(pokemonFuego);
let outputElement3 = document.getElementById("pregunta3");
outputElement3.textContent = `Pokémon tipo fuego: ${JSON.stringify(pokemonFuego)}`;

