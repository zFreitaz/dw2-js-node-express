let vetor = ['Laranja', 'Maça', 'Banana']
document.write(`<p>Nosso vetor é o: ${vetor}</p>`)


vetor[3] = 'Morango'
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// PUSH - Insere um novo elemento no FINAL do vetor:
vetor.push('Abacaxi')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

vetor[0] = 'Pera'
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// UNSHIFT - Insere um novo elemento no INÍCIO do vetor:
vetor.unshift('Laranja')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// LENGTH - Retorna o número de elementos no vetor
let numbers = [6, 8, 9, 3, 800, 200]
document.write(`<p>Nosso vetor agora é o: ${numbers}</p>`)
document.write(`<p>O nuúmero de elementos desse vetor é: ${numbers.length}</p>`)

// SORT - Ordena o vetor
document.write(`<p>O primeiro elemento do vetor é:: ${numbers[0]}</p>`)

let numbesOrdenados = numbers.sort()
document.write(`<p>O vetor ordenado é: ${numbesOrdenados}</p>`)

document.write(`<p>A lista de frutas ordenada é: ${vetor.sort()}</p>`)

// Ordenando um vetor númerio em ordem crescente:
document.write(`<p> ${numbers.sort((a, b) => a - b)}</p>`)

// Ordenando um vetor númerico em ordem decrescente:
document.write(`<p> ${numbers.sort((a, b) => b - a)}</p>`)



