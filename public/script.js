import { Task } from './Task.js';
const formulario = document.getElementById("form")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const id = document.getElementById("Id").value;
    const description = document.getElementById("descriptions").value;
    const prioridad = document.getElementById("priority").value;
    const estado = document.getElementById("state").value;
    const tarea1 = new Task(id,description,prioridad,state)
    tarea1.addTask()
    document.getElementById("_id").innerHTML = id;
    document.getElementById("_desc").innerHTML = description;
    document.getElementById("_prio").innerHTML = prioridad;
    document.getElementById("_stat").innerHTML = estado;
     id.innerHTML = "";
     description.innerHTML = "";
     prioridad.innerHTML = "";
     estado.innerHTML = "";   
})