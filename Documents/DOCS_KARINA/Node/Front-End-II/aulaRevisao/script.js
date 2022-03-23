// Uma função
function nomeDaFuncao(){
    console.log('O bloco foi executado');
}

//Uma função (tipo arrow function)
let nomeDaFuncao = () => {
    console.log('O bloco foi executado');
}

//Função do tipo arrow function simplificada
let arrowFunc2 = () => console.log('O bloco foi executado');

//Chamar uma função
nomeDaFuncao();

//Loops 
const dados = [
    {
        nome: 'Enrique',
        turma: 12
    },
    {
        nome: 'Luiza',
        turma: 12
    },
];

usuarios.forEach(function(usuario) {
    console.log(
        'Colocar o nome do usuario em uma div',
        usuario.nome
    );

    console.log(
        'Colocar o numero da turma em uma div, abaixo da div ',
        usuario,
        usuario.turma);
  
})