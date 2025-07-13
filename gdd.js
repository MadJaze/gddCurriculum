
//Criei uma variavel 

const nav_mobile = document.getElementById("button-mobile");
const menu = document.getElementById("menu");

//Coloquei nela numa função click 

nav_mobile.addEventListener("click", function(){

console.log("Abrir opciones navegador mobile");

if (menu.style.display == ("none")) {

menu.style.display = ("block");

} else {

menu.style.display = ("none");

}

})


