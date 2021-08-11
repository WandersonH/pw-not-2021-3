// Função tradicional com 1 parâmetro e 1 linha de código no corpo, com return
function quadrado(x) {
  return x * x
}

// Arrow function equivalente
// 1) A função deve ser atribuída a uma variável (ou, melhor, a uma constante)
// 2) Desaparece a palavra-chave 'function'
// 3) Desaparecem os parênteses em torno do parâmetro
// 4) Após o parâmetro, aparece o símbolo => (flecha, arrow)
// 5) Desaparecem as chaves em torno do corpo da função
// 6) Desaparece a palavra-chave 'return'
const quadrado2 = x => x * x

console.log(quadrado(9))
console.log(quadrado2(9))

console.log('-------------------------------')

// Funcão tradicional com 2 argumentos, 1 linha de corpo com return
function potencia(base, expoente) {
  return base ** expoente
}

// Arrow function correspondente
// Retornam os parênteses em torno dos argumentos
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(3, 5))
console.log(potencia2(3, 5))

console.log('-------------------------------')

// Função tradicional sem parâmetros, 1 linha de corpo com return
function horaAtual() {
  return new Date()
}

// Arrow function correspondente
// Os parênteses vazios marcam a posição do argumento
const horaAtual2 = () => new Date()

console.log(horaAtual().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'}))
console.log(horaAtual2().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'}))

console.log('-------------------------------')

// Função tradicional com 1 parâmetro e múltiplas linhas de corpo
function fatorial(n) {
  let res = 1
  for(let i = n; i > 1; i--) res *= i
  return res
}

// Arrow function correspondente
// Retornam as chaves do corpo da função
const fatorial2 = n => {
  let res = 1
  for(let i = n; i > 1; i--) res *= i
  return res
}

// Arrow function fatorial recursivo
const fatorial3 = n => (n <= 1 ? 1 : n * fatorial3(n - 1))

console.log(fatorial(5))
console.log(fatorial2(5))
console.log(fatorial3(5))