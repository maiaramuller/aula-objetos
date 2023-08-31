//Exercícios de interpretação de código

//1.A)
/*
console.log(filme.elenco[0]) - Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])-Virginia Cavendish
console.log(filme.transmissoesHoje[2]) -
 canal: "Globo",
 horario: "14h"
*/

//2.
//A)
/*
console.log(cachorro) -

nome: "Juca",
idade: 3 ,
raca: "SRD"

console.log(gato) -

nome: "Juba" ,
idade: 3, 
raca: "SRD"

console.log(tartaruga) -

nome: "Juco" ,
idade: 3, 
raca: "SRD"
*/

//B) Conseguimos fazer uma cópia do objeto, ou então acessar só algumas das propriedades dele utilizando as sintaxes de spread. 

//3.
//A)
/*
console.log(minhaFuncao(pessoa, "backender")) - false
console.log(minhaFuncao(pessoa, "altura")) - undefined
*/

//B) É para retornar o valor atribuidos as informações, no caso do "backender" será false, já no "altura" não retornará nada pois nao temos essa informação dentro do nosso objeto.


//Exercícios de escrita de código

//1.
//A)
/*
const pessoa = {
    nome: "Maiara",
    apelidos: ["Mai", "Maia", "May"]
}

const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`

console.log(frase)


//B)

const novaPessoa = {...pessoa, apelidos: ["Iara", "Ma", "May"]}
const frase2 = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`

console.log(frase2)
*/

//2.
//A)
//B)
/*
const primeiroObjeto = {
    nome: "Maiara",
    idade: 22,
    profissao: "estudante"

}

const segundoObjeto = {
    nome: "Alesandra",
    idade: 23,
    profissao: "auxiliar"
}

function minhaFuncao(objeto) {
    const resultado = [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length
    ]

    return resultado

}

console.log(minhaFuncao(primeiroObjeto))
console.log(minhaFuncao(segundoObjeto))
*/

//3
/*
let carrinho = []

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "morango",
    disponibilidade: true
}

const fruta3 = {
    nome: "uva",
    disponibilidade: true
}

function sacolao (fruta) { 
    carrinho.push(fruta)
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho)
*/