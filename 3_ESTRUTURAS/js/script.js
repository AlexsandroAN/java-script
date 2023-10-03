// 1 - variáveis

let nome = "Alex";

console.log(nome);

nome = "Alexsandro";

console.log(nome);

const idade = 31;

console.log(idade);

// idade = 32

console.log(typeof nome);
console.log(typeof idade);

// 2 mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c)

const nomecompleto = "Alexsandro"
const nomeCompleto = "Alexsandro Araújo"

console.log(nomecompleto)
console.log(nomeCompleto)
let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste)

// 3 - prompt
// const age = prompt("Digite a sua idade:")
// console.log(`Voçe tem ${age} anos.`);

// 4 - alert
// alert("Testando")
// const z = 10
// alert(`O número é ${z}`)

// 5 - Math
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - console 
console.log("teste!")
console.error("erro!")
console.warn("aviso!")

// 7 - if
const m = 10;

if (m > 5) {
    console.log("m é maior que 5!");
}

const user = "Alex";

if (user === "Alex") {
    console.log("Olá Alex!!");
}

if (user === "Pedro") {
    console.log("Olá Pedro!");
}

console.log(user === "João", user === "Pedro")


// 8 - else
const loggedIn = false

if (loggedIn) {
    console.log("Está autenticado!")
} else {
    console.log("Não está autenticado!")
}

const q = 10
const w = 25

if (q > 5 && w > 20) {
    console.log("Número mais altos!")
} else {
    console.log("Os números não são mais altos!")
}

// 9 - else if
if (1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim")
}

const userName = "Alex"
const userAge = 37

if (userName === "Pedro") {
    console.log("Bem vindo Pedro!")
} else if (userName === "Alex" && userAge === 37) {
    console.log(`Olá Alex, você tem ${userAge} anos!`)
} else {
    console.log("Nenhuma condição aceita!")
}

// 10 - while
let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1
}

// loop infinito
// let x = 10

// while (x > 5) {
//     console.log(`Imprimindo ${x}`)
// }

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo..")
}

let r = 10
for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`)
}