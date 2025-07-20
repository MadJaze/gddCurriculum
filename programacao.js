



//Formulario 1 Cadastro de jogadores////////////oooooooo////oooooo////////brncando com dom//////////////////////////

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

// FORMULARIO COM SUPERVISOR DE ERROS ////////////OOO/////////////////OOOO//////////////////////OOOOO////////////OOOO/////

let form = document.getElementById('formulario');


// dados do formulario, explicação dos erros 


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(form);

    let dados = {

        nome: formData.get("username").trim(),
        email: formData.get("email").trim(),
        telefone: formData.get("telefone").trim(),
        idade: +formData.get("idade"),
        senha: formData.get("password"),
        senhaConfirm: formData.get("password_confirm"),
        termoseCondicoes: !!formData.get("termos-e-condicoes")

    };


    let erros = [];

    if (!ValidaObrigatorio(dados.nome)) {
        erros.push("Username é obrigatorio"); 
    } else if (!ValidaPeloMenosDosCarateres(dados.nome)) { 
        erros.push("O nome precisa pelo menos ter dois carateres");
    }


    if (!validaMaiorouIguala18(dados.idade)) {
        erros.push("Precisa ser maior de idade para Login");
    }

    if (!validaFormatoCelular(dados.telefone)) {
        erros.push("Número de telefone inválido (99999-9999)");
    }

    if (!validaFormatoEmail(dados.email)) {
        erros.push("email inválido");
    }


    if (!ValidaObrigatorio(dados.senha)) {
        erros.push("Uma senha é obrigatoria");
    } else if (!ValidarSenha(dados.senha)) {
        erros.push("A senha deve seguir o formato indicado");
    } else if (!ValidarIguais(dados.senha, dados.senhaConfirm)) {
        erros.push("A senha deve conferir com sua confirmação");
    }

    if(!ValidartermoseCondicoes(dados.termoseCondicoes)){
        erros.push("Aceite os terminos e condições para continuar")
    }

    Exibirerros(erros)
        if(!erros.length) {
            setTimeout(() => alert('Seus dados foram enviados para a lua!'), 0)
        }
    
        console.log(dados);
        console.log(erros);

});




//funçoes condicionales de valor com Regex

function ValidaObrigatorio(valor) {
    return !!valor;
}


function ValidaPeloMenosDosCarateres(valor) {
    return valor.length >= 2; 
}

function validaMaiorouIguala18(valor) {
    return valor >= 18;
}

function validaFormatoEmail(valor) {
    return /^\S+@\S+$/.test(valor);
}


function validaFormatoCelular(valor) {
   

    return /^[0-9]{5}-[0-9]{4}$/.test(valor);
}

function ValidarSenha(valor) {

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(valor)
     
}


function ValidarIguais(valor1, valor2) {

    return valor1 === valor2;
}

function ValidartermoseCondicoes(valor) {
    return !!valor
};

function Exibirerros(erros) {
    let areaErros = document.getElementById("erros_area");
    areaErros.innerHTML = ""

    let listaErros = document.createElement('ul')
    listaErros.style.color = 'red';


    for (let erro of erros) {
        let item = document.createElement('li')
        item.textContent = erro;
        listaErros.appendChild(item);
    }

    areaErros.appendChild(listaErros)
}
// Getting API ////////////OOO/////////////////OOOO//////////////////////OOOOO////////////OOOO/////


function getAPI() {

const ul = document.querySelector('ul');
const user = document.querySelector('#user').value;

ul.innerHTML = " "; 

fetch(`https://api.github.com/users/${user}/repos`)
.then(async res => {


let data = await res.json();

data.map(item => {

let li = document.createElement('li');
li.classList.add("margin-padding10");
let hr = document.createElement('hr');

li.innerHTML = `<strong>${item.name}</strong>`

ul.appendChild(li);
ul.appendChild(hr); 

});








})
.catch(e => {

  console.log(e);

}) 



}