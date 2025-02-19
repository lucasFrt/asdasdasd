










// let menu = 0
// let imoveis = 0
// let num = 1
// var imovel = new Object();

// while (menu < 3) { 
//     menu = parseInt(prompt('Imoveis cadastrados: ' + imoveis + '\n1: Salvar um Imovel. \n2: Mostrar Imoveis cadastrados. \n3: Sair'))

//     if (menu===1) {
//         imovel.im(num).proprietario = prompt('Insira o nome do proprietario: ');
//         imovel.im(num).quartos = prompt('Insira a quantidade de quartos:')
//         imovel.im(num).banheiro = prompt('Insira a quantidade de banheiros: ')
//         imovel.im(num).garagem = prompt('Insira se possui garagem: ')
//         imoveis++
//         num++
//         console.log(imovel)
//     } else if(menu === 2) {
//         alert(JSON.stringify(imovel, null, 2)); 
//     }

// }









// let resultado = 0


// do { 
//     resultado = prompt(' 1 = opcao 1 \n 2 = opcao 2 \n 3 = opcao 3 \n 4 = opcao 4 \n 5 = encerrar')
//     if ( resultado < 5 ) {
//         alert('voce escolheu a opcao ' + resultado )
//     } else {
//         alert('voce escolheu a opcao 5 e o programa sera encerrado ')
//     }
// } while(resultado < 5 )


// let num = 1 

// do {
//     num += 1
//     console.log(num)
// } while (num < 10)



































// const nome = prompt("Ola turista, qual o seu nome? ")

// const viajou = prompt('voce ja viajou para outra cidade? (Y / N) ')

// if (viajou === 'y' || viajou === 'Y') {
//     let cidades = prompt("Legal, Qual o nome da cidade?")
//     let resposta = prompt('Interessante, mas voce ja viajou para mais alguma? (Y / N) ')
//     let numCidades = 1
//     while (resposta === 'y') {
//         let cidades2 = prompt("Legal, Qual o nome da cidade?")
//         cidades += ', ' + cidades2
//         resposta = prompt('Interessante, mas voce ja viajou para mais alguma? (Y / N) ')
//         numCidades++
//     }
//     console.log('seu nome e ', nome, 'voce ja viajou para', cidades, 'com um total de ', numCidades)
    
// } else {

//     alert('Entao ta bom')
// }



























// if (viajou = 'y' || 'Y') {
//     let cidades = prompt("Qual o nome da cidade?")
// }




























// const result = prompt("Qual a resposta correta? A, b ou c?")

// const novoR = parseFloat(result)
// switch (novoR){ 
//     case 1:
//         console.log("Errou")
//         break
//     case 2:
//         console.log("Acertou")
//         break
//     case 3:
//         console.log("Errou tambem!")
//         break
//     default: 
//         alert("Marque uma das opcoes descritas")
// }










// const nome1 = prompt('insira o nome do veiculo 1')
// const v1 = prompt('Insira a velocidade do veiculo 1 ')
// const nome2 = prompt('insira o nome do veiculo 2')
// const v2 = prompt('Insira a velocidade do veiculo 2 ')



// if(v1 > v2 ) {
//     console.log('a velocidade do ', nome1, ' e maior que a do ', nome2)
// } else if (v1 === v2) {
//     console.log('a velocidade do ', nome1, ' e igual a do ', nome2)
// } else {
//     console.log('o carro ', nome2, ' e mais rapido que ', nome1)
// }
