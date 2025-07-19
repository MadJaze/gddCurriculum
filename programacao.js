/*alert("ATENÇÃO: DIGITEM AS SUAS INFORMAÇÕES PARA JOGAR SPACESHIP.JS");

alert("Jogador 1: ");

let nome1 = prompt("Digite seu nome: ");
let idade1 = Number(prompt("digite sua idade"));
let sobrenome1 = prompt("Digite seu sobrenome: ");
let corFavorita1 = prompt("Qual a sua cor favorita: ")

alert("Jogador 2: ")

let nome2 = prompt("Digite seu nome: ");
let idade2 = Number(prompt("digite sua idade"));
let sobrenome2 = prompt("Digite seu sobrenome: ");
let corFavorita2 = prompt("Qual a sua cor favorita: ")


console.table({

nome: nome1,
idade: idade1,
sobrenome: sobrenome1,
cor: corFavorita1,

}) 

console.table({

nome: nome2,
idade: idade2,
sobrenome: sobrenome2,
cor: corFavorita2,

}) 

if (idade1 > idade2) {

alert(nome2 + " é mais novo que " + nome1);

} else if (idade1 === idade2) {

  alert("Os dois tem a mesma idade..: " + idade1);

} else if ( isNaN(idade1)|| isNaN(idade2)) {

  alert("Não da para comparar valores null, recarregue a página e insira as informações corretamente");

} else {

  alert(nome2 + " é mais velho que " + nome1);
}




if (corFavorita1 === corFavorita2) {

alert("ambos gostam da mesma cor: " + corFavorita1 )


} else {

alert(nome1 + " " + sobrenome1 + " gosta da cor: " + corFavorita1 );
alert(nome2 + " " + sobrenome2 + " gosta da cor: " + corFavorita2 );
}

*/

//Formulario para creação de jogadores:
//Primeira tela: Obter a quantidade de jogadores from user 

const title = document.getElementById("title");
const instruction = document.getElementById("instruction");

//instruction.style.width = "50px";
let jogadoresCadastrados = 0;
const maxJogadores = 5;
let quantidade = 12;

let listaCores = ["vermelha", "azul", "amarelo", "verde", "roxo"];

  let numJogadores = document.createElement("input");
  let numJogadoresSubmit = document.createElement("button");

  let submitPlayer = document.createElement("button");
  let inputNome = document.createElement("input");  
  let inputIdade = document.createElement("input");
  
  let h1text = document.createElement("p");

  let erro = document.createElement("h1");
  erro.style.color = "red";
  // erro.style.position = "absolute" 

//Função construtora JOGADORES 

function jogadores(nome, idade, cor) {

  this.nome = nome;
  this.idade = idade;
  this.cor = cor;


}

let listaJogadores= [];

function encontrarMaisVelhoEJovem() {
  if (listaJogadores.length === 0) return;

  let maisVelho = listaJogadores[0];
  let maisJovem = listaJogadores[0];

  for (let i = 1; i < listaJogadores.length; i++) { 
    let jogador = listaJogadores[i];

    //0 é o elemento comparável, em quanto algúm outro valor NÃO seja mais alto que o atual 0.
    // o 0 ficará na variável "maisVelho" até encontrar outra idade maior que a dele. 

    if (jogador.idade > maisVelho.idade) {
      maisVelho = jogador;
    }

    //o Primeiro elemento 0 é comparado com o restante da lista.
    //Sustituido apenas quando encontrar um valor mais baixo.

    if (jogador.idade < maisJovem.idade) {
      maisJovem = jogador;
    }
  }

  

   setTimeout(() => {
       
          
   instruction.innerHTML = ("Jogador mais velho: " + maisVelho.nome + " (" + maisVelho.idade + " anos)");

      }, 2000);

       setTimeout(() => {
          
  instruction.innerHTML = ("Jogador mais jovem: " + maisJovem.nome + " (" + maisJovem.idade + " anos)");
       

      }, 2000 * 2 );

      setTimeout(() => {
       
          
   instruction.innerHTML = ("Thanks for participating.");

      }, 2000 * 3);

       setTimeout(() => {
          
        somarIdades()
  instruction.innerHTML = ("C to shoot, Directionals to move!");
       

      }, 2000 * 4 );

}

function somarIdades() {

let soma = 0; 

for (i = 0; i < quantidade; i++) {


  soma+= Number(listaJogadores[i].idade);

}

 setTimeout(() => {
       
          
   instruction.innerHTML = instruction.innerHTML = (`Total das idades calculadas: ${soma}`);

      }, 2000);

       setTimeout(() => {
          
 instruction.innerHTML = ("C to shoot, Directionals to move!");
       

      }, 2000 * 2 );


}




function dialogoInterativo() {

  setTimeout(() => {
       
          
   instruction.innerHTML = `Loading some data...`

      }, 2000);

       setTimeout(() => {
          
        encontrarMaisVelhoEJovem();
       

      }, 2000 * 2 );
}

  function mostrarErro1(textErro){

        erro.textContent = textErro; 
        title.appendChild(erro);

        title.removeChild(numJogadores);
        title.removeChild(numJogadoresSubmit);
        

         setTimeout(() => {
        erro.remove();
          title.appendChild(numJogadores);
           title.appendChild(numJogadoresSubmit);


      }, 1934);

          }

  function mostrarErro2(textErro){

        erro.textContent = textErro; 
        title.appendChild(erro);

        title.removeChild(inputNome);
        title.removeChild(inputIdade);
           title.removeChild(submitPlayer);
       

       

      //  title.removeChild(inputCor);
     

         setTimeout(() => {
        erro.remove();
          
        title.appendChild(inputNome);
        title.appendChild(inputIdade);
        selectorCores()
        title.appendChild(submitPlayer);
       

      }, 1934);

          }

    function selectorCores() {
    let selectCor = document.createElement("select");
   

    selectCor.name = "cor" //Para seleccionar somente um
    selectCor.type = "option";
    selectCor.style.width = "150px"
    selectCor.style.height = "30px"
    selectCor.style.padding = "5px"
    selectCor.style.marginRight = "10px"
    selectCor.value = listaCores;
    selectCor.id = "selectCor";


    for (i = 0; i < listaCores.length; i++) {
      

    let optionsCor = document.createElement("option");  
    optionsCor.value = listaCores[i];
    optionsCor.textContent = listaCores[i];

    selectCor.appendChild(optionsCor);
    }

     title.appendChild(selectCor);
     
  }

  function cadatrarJogadores(){
    // inputNome properties 

    inputNome.style.width = "150px"
    inputNome.style.height = "20px"
    inputNome.style.padding = "5px"
    inputNome.style.marginRight = "10px"
    inputNome.placeholder = "escreva seu nome";
   // inputNome.style.left = 0;
   // inputNome.style.top = 0;
    title.appendChild(inputNome);

    // inputIdade properties 

    inputIdade.type = "number";
    inputIdade.style.width = "150px"
    inputIdade.style.height = "20px"
    inputIdade.style.padding = "5px"
    inputIdade.style.marginRight = "10px"
    inputIdade.placeholder = "escreva sua idade";
   // inputNome.style.left = 0;
   // inputNome.style.top = 0;
    title.appendChild(inputIdade);

       // inputCor properties 

  selectorCores()


    //Button submit Properties
    submitPlayer.style.background = "blue";
     submitPlayer.textContent = "Enviar Jogador ↓";
    submitPlayer.style.width = "150px"
    submitPlayer.style.height = "50px"
   // form.style.left = 0;
   // form.style.top = 0;
    title.appendChild(submitPlayer);
}


    h1text.textContent = "Quantidade de jogadores (MAX 5)"
    h1text.style.color = "white"
    title.appendChild(h1text);

    //numJogadores.placeholder = "escreva seu nome";
   // form.style.left = 0;
   // form.style.top = 0;
    title.appendChild(numJogadores);

  // numJogadores properties 
    numJogadores.type = "number";
    numJogadores.style.width = "150px"
    numJogadores.style.height = "20px"
    numJogadores.style.padding = "5px"
    numJogadores.style.marginRight = "10px"
    //numJogadores.placeholder = "escreva seu nome";
   // form.style.left = 0;
   // form.style.top = 0;
    title.appendChild(numJogadores);


    //Button num jogadores submit Properties
    numJogadoresSubmit.textContent = "Enviar"
    numJogadoresSubmit.style.background = "blue";
 
    numJogadoresSubmit.style.width = "150px"
    numJogadoresSubmit.style.height = "50px"
   // form.style.left = 0;
   // form.style.top = 0;
    title.appendChild(numJogadoresSubmit);


    // Tela dos: Caso de primeiro erro, num max = 5
    // Primeiro botão deve enlazar a info do input number e agir de acordo as especificações do sistema.

    //Evento addEventListener para o primeiro botão: 
    numJogadoresSubmit.addEventListener("click", () =>{

     quantidade = parseInt(numJogadores.value);

        if (quantidade > maxJogadores) {
          mostrarErro1(`NUMERO MAXIMO DE JOGADORES: ${maxJogadores}!`);
      }

       if (quantidade <= 0) {
          mostrarErro1("Insira um número maior a 0!");
      }

      if (quantidade > 0 && quantidade < 6) {

        

      cadatrarJogadores();
      instruction.innerHTML = `Player registering...`
      title.removeChild(numJogadores);
      title.removeChild(numJogadoresSubmit);
       title.removeChild(h1text);

      }

    })

    //Tela 3: Informações dos jogadores separadamente. 



    submitPlayer.addEventListener("click", () =>{

      let idades = inputIdade.value;
         let nome = inputNome.value;
         let corSelecionada = selectCor.value;


      if (idades <= 0 && !nome) {

         mostrarErro2("Insira um NOME e uma idade real.")
         
         document.getElementById("selectCor").remove();

      } else if (nome && idades <=0) {

         mostrarErro2("Insira uma idade real.")
        
         document.getElementById("selectCor").remove();

      } else if (!nome && idades > 0 ) {

         mostrarErro2("Insira o seu NOME.")
        
         document.getElementById("selectCor").remove();
 
      } else if (nome && idades > 0 ) {

        if (listaCores.includes(corSelecionada)) {

      let index = listaCores.indexOf(corSelecionada);

      listaCores.splice(index, 1);

      // Subir info do jogador correspondente a lista jogadores 

      let jogador = new jogadores(nome, idades, corSelecionada);
      listaJogadores.push(jogador);
      document.getElementById("selectCor").remove(); // eliminar o seletor de cores
            selectorCores() // colocar ele de novo atualizado.
          jogadoresCadastrados++ // somando jogadores 
            title.removeChild(submitPlayer); //para deixar o seletor de cores no seu lugar 
             title.appendChild(submitPlayer);

          console.log(listaJogadores);


    if (jogadoresCadastrados >= quantidade) {

      instruction.innerHTML = `Thanks for participating!`
         document.getElementById("selectCor").remove(); // eliminar o seletor de cores
           title.removeChild(inputNome);
        title.removeChild(inputIdade);
        title.removeChild(submitPlayer); 
        dialogoInterativo()
    }

} 

      }
   

    })




/*

alert("Versão 1.3 register System: AGORA PODE INGRESAR MAIS JOGADORES NA SPACESHIP.JS")

let numJogadores = Number(prompt("Quántos jogadores vão se cadastrar? (MAX jogadores = 5)"));
const maxJogadores = 5;





while (isNaN(numJogadores) || numJogadores === 0 || numJogadores > 5) {

 
  
alert("Insira um número real de jogadores!")
numJogadores = Number(prompt("Quántos jogadores vão se cadastrar? (NUMEROS)"));

while (numJogadores > 5) {

alert("MAXIMO DE JOGADORES: 5!")
numJogadores = Number(prompt("Quántos jogadores vão se cadastrar? (NUMEROS MAX 5)"));

}


}

function jogadores(nome, idade, cor) {

  this.nome = nome;
  this.idade = idade;
  this.cor = cor;


}


//A lista aqui é para tirar os itens em quanto estejam sendo selecionados pelos jogadores. 1 para dada jogador.

listaCores = ["vermelha", "azul", "amarelo", "verde", "roxo"];


let listaJogadores = []; //Com esta lista estaremos guardando as informções dos jogadores 

// Registrar cada jogador com um for loop 

for (i = 0; i < numJogadores; i++) {

let nome = prompt(`Qual o nome do jogador ${i + 1} `)
let idade = Number(prompt("Qual a sua Idade?"))

while (isNaN(idade) || idade === 0)  {

alert("Digite números.");

idade = Number(prompt("Qual a sua Idade? (NUMEROS)"));

}  

let cor = prompt(`Escolha a cor da sua SPACESHIP, cores disponíveis: ${listaCores.join(" , ")}.`).toLowerCase();


while (!listaCores.includes(cor)) {

alert(`Essa cor: ${cor}, não se encontra disponível, tente novamente.`);
cor = prompt(`Escolha a cor da sua SPACESHIP, cores disponíveis: ${listaCores}.`).toLowerCase();

} 

// Eliminação das cores da lista 

if (listaCores.includes(cor)) {

  let index = listaCores.indexOf(cor);

  listaCores.splice(index, 1);

  alert(`Você escolheu a cor: ${cor}!! Cores restantes: ${listaCores.join(" , ")}`)

let jogador = new jogadores(nome, idade, cor);
listaJogadores.push(jogador);

} 




}


function somarIdades() {

let soma = 0; 

for (i = 0; i < numJogadores; i++) {


  soma+= listaJogadores[i].idade;

}

  console.log(`Total das idades calculadas: ${soma}`);
}

somarIdades()

function encontrarMaisVelhoEJovem() {
  if (listaJogadores.length === 0) return;

  let maisVelho = listaJogadores[0];
  let maisJovem = listaJogadores[0];

  for (let i = 1; i < listaJogadores.length; i++) { 
    let jogador = listaJogadores[i];

    //0 é o elemento comparável, em quanto algúm outro valor NÃO seja mais alto que o atual 0.
    // o 0 ficará na variável "maisVelho" até encontrar outra idade maior que a dele. 

    if (jogador.idade > maisVelho.idade) {
      maisVelho = jogador;
    }

    //o Primeiro elemento 0 é comparado com o restante da lista.
    //Sustituido apenas quando encontrar um valor mais baixo.

    if (jogador.idade < maisJovem.idade) {
      maisJovem = jogador;
    }
  }

  console.log("Jogador mais velho: " + maisVelho.nome + " (" + maisVelho.idade + " anos)");
  console.log("Jogador mais jovem: " + maisJovem.nome + " (" + maisJovem.idade + " anos)");
}

encontrarMaisVelhoEJovem();


//Mostra a lista dos jogadores
console.log(listaJogadores);

*/

//////////////////////////////////////////////////////////////// SPACE SHIP 0.1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function spaceShip() {

const jogador = document.getElementById("jogador");
const container = document.getElementById("section-jogo");


//Posição inicial do jogador

let posX = 0;
let posY = 0;


let veloc = 6;
let ultimaDireccion = "derecha"; // por defecto



   canShoot = true;


const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  c: false
};




document.addEventListener("keydown", (e) => {
  if (e.key in keys) {
    keys[e.key] = true;
  
      veloc = 6;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key in keys) {
    keys[e.key] = false;
      
  }
  if (e.key === "c")  {

   canShoot = true;
 
 //  console.log(canShoot);
  }

});



function moverJugador() {

  //Mover dentro do container
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const jogadorWidth = jogador.offsetWidth;
  const jogadorHeight = jogador.offsetHeight;


  // Limpiar clases
  jogador.classList.remove("arriba", "abajo", "izquierda", "derecha", "idle");

  let moved = false;

  // Movimiento vertical
  if (keys.ArrowUp && posY > 0) {
    posY -= veloc;
    jogador.classList.add("arriba");
     ultimaDireccion = "arriba";
    moved = true;
  }
  if (keys.ArrowDown && posY + jogadorHeight < containerHeight) {
    posY += veloc;
    jogador.classList.add("abajo");
     ultimaDireccion = "abajo";
    moved = true;
  }

  // Movimiento horizontal
  if (keys.ArrowLeft && posX > 0) {
    posX -= veloc;
    jogador.classList.add("izquierda");
     ultimaDireccion = "izquierda";
    moved = true;
  }
  if (keys.ArrowRight && posX + jogadorWidth < containerWidth) {
    posX += veloc;
    jogador.classList.add("derecha");
      ultimaDireccion = "derecha";
    moved = true;
  }

  if (keys.c && canShoot) {

     canShoot = false;    
    criarProjectil(jogador.style.left, jogador.style.top )
   //  console.log(canShoot);
   

  }

  if (!moved) {
    jogador.classList.add("idle");
  }

  jogador.style.left = posX + "px";
  jogador.style.top = posY + "px";


   
  requestAnimationFrame(moverJugador);

}

function criarProjectil(xInicial, yInicial) {

    let shot = document.createElement("div");
   
    shot.style.position= "absolute";

    shot.style.background = "blue";

    shot.style.width= "10px";
    shot.style.height= "10px";
    
    let posxNum = parseInt(xInicial);
    let posyNum = parseInt(yInicial);

    shot.style.left = (posxNum + 20) + "px";
    shot.style.top =  (posyNum + 20)+ "px";
    container.appendChild(shot);

//Dependendo da direção do olhar do jogador o shot terá também seu recorrido

let dirX = 0;
let dirY = 0;

switch(ultimaDireccion) {

case "derecha":

dirX = 1;

break;

case "izquierda":

dirX = -1;

break;

case "abajo":

dirY = 1;

break;

case "arriba":

dirY = -1;

break;


}

  function moverProjetil(){

  posxNum += dirX * 10;
  posyNum += dirY * 10;

    shot.style.left = (posxNum + 20)+ "px";
    shot.style.top = (posyNum + 20)+ "px";

  if (posxNum > container.clientWidth || posxNum < 0) {
  if (container.contains(shot)) {
    container.removeChild(shot);
  }
  return;
}


  if (posyNum > container.clientHeight|| posyNum < 0)  {
  if (container.contains(shot)) {
    container.removeChild(shot);
  }
  return;
}
   
requestAnimationFrame(moverProjetil);



}

  moverProjetil() 

}


//moverProjetil(); // Comienza la animación
moverJugador();

}


spaceShip()