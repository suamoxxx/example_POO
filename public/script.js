document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('list');
    displayTasks();

    const formulario = document.getElementById("form");
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
                const del = document.createElement('img');
                del.src = "./img/del.png";
                del.alt = "Delete";
                const edit = document.createElement('img');
                edit.src = "./img/edit.png";
                edit.alt = "Edit";
                edit.style.cursor = "pointer";

                
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}, State: ${task.state} ${del} ${edit}`;
                taskList.appendChild(listItem);
            });
        }
    }
});