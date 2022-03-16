//Utilizando el template de ejercicio Si o NO, se debe cambiar la etiqueta 
//img por un gif y cambiar el texto por el resultado de la api cuando se 
//apriete el botón.

const img= document.getElementById("img")
const btn= document.getElementById("btn")

const siOno = async ()=>{
const res = await fetch ("https://yesno.wtf/api")
let data = await res.json();

img.src = data.image;

}

btn.addEventListener("click", siOno);
siOno();

