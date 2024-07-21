import {Task} from './Task'
document.addEventListener('DOMContentLoaded', () => {//Evento que carga activa cuando el HTML se analizo y el DOM esta listo para manipular
    const taskList = document.getElementById('list');
    displayTasks();

    const formulario = document.getElementById("form");//Evento submit para enviar formulario al Array de la clase Task
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("Id").value;
        const description = document.getElementById("descriptions").value;
        const priority = document.getElementById("priority").value;
        const state = document.getElementById("state").value;
        const tarea1 = new Task(id, description, priority, state); // Instanciamos la clase Task
        tarea1.addTask(); // Llamamos al método añadir tareas
        const clear = formulario.querySelectorAll("input");
        clear.forEach((input) => {
            input.value = "";
        });
        displayTasks();// Actualizar la lista de tareas en el DOM
    });
    function displayTasks() {
        taskList.innerHTML = ""; // Limpiar la lista antes de agregar los elementos
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            const parsed = JSON.parse(tasks);
            parsed.forEach((task) => {               
                const listItem = document.createElement('li');
                listItem.style.background = 'rgba(255, 255, 255,2)';//Estilos para el elemento LI
                listItem.style.width = 200 + "p|x";
                listItem.style.height = 55 + "px";
                listItem.style.display = 'flex'; // Para alinear elementos horizontalmente
                listItem.style.alignItems = 'center';
                listItem.style.justifyContent = 'space-between';
                listItem.style.padding = '0 8px';
                listItem.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.81)";
                listItem.style.borderRadius= 3 + "px"
                
                const del = document.createElement('img');//Estilo para boton para eliminar 
                del.src = './img/del.png';
                del.style.width = 35 + "px";
                del.style.height= 35 + "px";
                del.style.cursor = 'pointer';
                del.addEventListener("click", ()=>  {//Evento para boton eliminar
                    alert("test")
                });

                listItem.textContent = `
                ${task.id} ${task.description}, 
                ${task.priority} ${task.state}`;

                const edit = document.createElement('img');//Estilo para el boton editar 
                    edit.src = './img/edit.png';
                    edit.style.height= 29  + "px"   
                    edit.style.width = 29 + "px";
                edit.addEventListener("click", (e)=>  {//Evento para boton editar 
                    e.preventDefault()
                    alert("test") 
                    
                 });
    
               

                taskList.appendChild(listItem);
                listItem.appendChild(edit)
                listItem.appendChild(del)
            });
        }
    }
});

