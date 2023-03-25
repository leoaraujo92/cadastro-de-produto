// Definindo uma lista
let numeros = [2,4,6,8,10,3,7]

// Percorrendo a lista

for(let i = 0; i < numeros.length; i ++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i] + "É um numero par")
    } else{
        console.log(numeros[i] + "É um numero impar")
    }
}
