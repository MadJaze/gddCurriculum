alert("ATENÇÃO: DIGITE SUAS INFORMAÇÕES PARA JOGAR SPACESHIP.JS");

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("digite sua idade"));
let sobrenome = prompt("Digite seu sobrenome: ");
let corFavorita = prompt("Qual a sua cor favorita: ")

console.table({

nome: nome,
idade: idade,
sobrenome: sobrenome,
cor: corFavorita,

}) 




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


