// Seleccionando los elementos
let incrementar = document.querySelector(".incrementar");
let disminuir = document.querySelector(".disminuir");
let reset = document.querySelector(".reset");
let text = document.querySelector("#counter");
let contador = 0; 

incrementar.addEventListener('click', () => {
    contador++; 
    text.textContent = contador; 
});
disminuir.addEventListener('click', () => {
    contador--; 
    text.textContent = contador; 
});
reset.addEventListener('click', () => {
    contador = 0;
    text.textContent = contador; 
});
