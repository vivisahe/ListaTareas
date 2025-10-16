const btnAgregar = document.getElementById("btnAgregar");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("listaTareas"); 

const guardadas = localStorage.getItem("tareas");
if (guardadas !== "" && guardadas !== null) {
  lista.innerHTML = guardadas;
}

btnAgregar.addEventListener("click", function() {
   const texto = inputTarea.value.trim(); 
   if (texto !== "") {

       lista.innerHTML += `
       <li class="tarea-item" onclick="completar(this)">
       <span>${texto}</span>
       </li>
 `;


 localStorage.setItem("tareas", lista.innerHTML);

inputTarea.value = ""; 
 }
});

function completar(elemento) {
elemento.classList.toggle("completada");

localStorage.setItem("tareas", lista.innerHTML);
}

