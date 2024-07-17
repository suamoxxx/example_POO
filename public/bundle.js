/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var taskList = document.getElementById('list');\n  displayTasks();\n  var formulario = document.getElementById(\"form\");\n  formulario.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var id = document.getElementById(\"Id\").value;\n    var description = document.getElementById(\"descriptions\").value;\n    var priority = document.getElementById(\"priority\").value;\n    var state = document.getElementById(\"state\").value;\n    var tarea1 = new Task(id, description, priority, state); // Instanciamos la clase Task\n    tarea1.addTask(); // Llamamos al método añadir tareas\n    var clear = formulario.querySelectorAll(\"input\");\n    clear.forEach(function (input) {\n      input.value = \"\";\n    });\n    displayTasks(); // Actualizar la lista de tareas en el DOM\n  });\n  function displayTasks() {\n    taskList.innerHTML = \"\"; // Limpiar la lista antes de agregar los elementos\n    var tasks = localStorage.getItem('tasks');\n    if (tasks) {\n      var parsed = JSON.parse(tasks);\n      parsed.forEach(function (task) {\n        var del = document.createElement('img');\n        del.src = \"./img/del.png\";\n        del.alt = \"Delete\";\n        var edit = document.createElement('img');\n        edit.src = \"./img/edit.png\";\n        edit.alt = \"Edit\";\n        edit.style.cursor = \"pointer\";\n        var listItem = document.createElement('li');\n        listItem.textContent = \"ID: \".concat(task.id, \", Description: \").concat(task.description, \", Priority: \").concat(task.priority, \", State: \").concat(task.state, \" \").concat(del, \" \").concat(edit);\n        taskList.appendChild(listItem);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://example_poo/./public/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/script.js"]();
/******/ 	
/******/ })()
;