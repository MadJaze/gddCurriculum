
//Atribuindo variaveis variavel 

const nav_mobile = document.getElementById("button-mobile");
const menu = document.getElementById("menu");
const nav_buttons = document.getElementsByClassName("nav-buttons");

//Coloquei nela numa função click 

nav_mobile.addEventListener("click", function(){

if (menu.style.display == ("none")) {

menu.style.display = ("block"); //Mostra o menu
document.body.style.overflow = "hidden"; //desativa o scrolling

} else {

menu.style.display = ("none"); //oculta o menu
document.body.style.overflow = "auto"; //ativa o scrolling

}

})

// Função para os botões do site em mobile 

for (let i = 0; i < nav_buttons.length; i++) {

nav_buttons[i].addEventListener("click", function(){

menu.style.display = ("none"); //oculta o menu
document.body.style.overflow = "auto"; //ativa o scrolling


})

}

