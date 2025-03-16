Gestión de Tareas con POO en JavaScript

Descripción:

Este proyecto es una aplicación de gestión de tareas desarrollada con JavaScript ES6, que implementa los principios de la Programación Orientada a Objetos (POO). La aplicación permite a los usuarios crear, buscar y ordenar tareas, utilizando funcionalidades como almacenamiento local (localStorage) y búsqueda binaria implementada con árboles binarios.

Características Principales:

POO con Clases: Utiliza la clase Task para representar tareas con propiedades como id, descriptions, priority y state.
Gestión de Tareas: Permite agregar tareas a una lista y almacenarlas en el almacenamiento local del navegador.
Búsqueda de Tareas: Implementa dos métodos de búsqueda:
Búsqueda por ID: Utiliza el método search con la propiedad filter para buscar tareas por su ID.
Búsqueda Binaria: Implementa un árbol binario para realizar búsquedas binarias eficientes de tareas ordenadas por ID.
Interfaz de Usuario Dinámica: La interfaz de usuario se actualiza dinámicamente utilizando el DOM para mostrar la lista de tareas.
Almacenamiento Local: Las tareas se almacenan en el almacenamiento local del navegador, lo que permite persistencia de datos entre sesiones.
Funcionalidades de Edición y Eliminación: Incluye botones para editar y eliminar tareas, aunque la funcionalidad completa está marcada como "test" y está en desarrollo.
Estructura del Proyecto:

├── index.html
├── index.js
├── Task.js
├── img/
   ├── del.png
   └── edit.png
index.html: Archivo HTML principal que contiene la estructura de la interfaz de usuario.
index.js: Archivo JavaScript principal que maneja la lógica de la aplicación y la interacción con el DOM.
Task.js: Archivo JavaScript que define la clase Task y sus métodos.
img/: Carpeta que contiene las imágenes utilizadas en la interfaz de usuario (botones de edición y eliminación).

Cómo Utilizar la Aplicación:
Abre el archivo index.html en tu navegador web.
Utiliza el formulario para ingresar los detalles de una nueva tarea (ID, descripción, prioridad, estado).
Haz clic en el botón "Enviar" para agregar la tarea a la lista.
Las tareas se mostrarán en la lista debajo del formulario.
Puedes buscar tareas por ID utilizando la funcionalidad de búsqueda (a implementar).
Las tareas se ordenan automáticamente por ID mediante la búsqueda binaria (a implementar).
Utiliza los botones de edición y eliminación para realizar acciones sobre las tareas (funcionalidad en desarrollo).
Implementación de la Clase Task:

La clase Task se define en el archivo Task.js y tiene las siguientes propiedades y métodos:

Propiedades:
id: Identificador único de la tarea.
descriptions: Descripción de la tarea.
priority: Prioridad de la tarea.
state: Estado de la tarea.
managerTasks: Un array estático que almacena todas las tareas.
Métodos:
addTask(): Agrega una nueva tarea al array managerTasks y la almacena en el almacenamiento local.
search(dni): Busca tareas por ID utilizando el método filter.
searchBinary(): Implementa la búsqueda binaria utilizando un árbol binario.
Implementación de la Búsqueda Binaria:

La búsqueda binaria se implementa utilizando dos objetos prototipados: Node y Tree_Binary. El árbol binario se construye a partir de las tareas almacenadas en managerTasks, y se utiliza un recorrido en orden (inOrder) para obtener las tareas ordenadas por ID.

Funcionalidades Pendientes:

Implementar completamente la funcionalidad de búsqueda por ID en la interfaz de usuario.
Implementar completamente la funcionalidad de búsqueda binaria en la interfaz de usuario.
Completar la funcionalidad de edición y eliminación de tareas.
Mejorar la interfaz de usuario con estilos CSS adicionales.
Agregar validaciones de formulario y mensajes de error.
Instalación:

No se requieren pasos de instalación adicionales. Simplemente abre el archivo index.html en tu navegador web.
