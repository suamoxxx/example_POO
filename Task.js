//Clase Tarea la cual tiene cinco propiedades y 3 metodos
class Task {
        static managerTasks = [];     
        constructor(id, descriptions, priority, state) {
          this.id = id;
          this.descriptions = descriptions;
          this.priority = priority;
          this.state = state;
        }    
//Metodo para hacer push al array managerTask 
        addTask() {
          const newTask = {
            id: this.id,
            description: this.descriptions,
            priority: this.priority,
            state: this.state
          };
          Task.managerTasks.push(newTask);
        }
// Metodo para buscar por ID con la propiedad filter
        static search(dni){
                console.log("analizando")
                const findId = Task.managerTasks.filter(task => {
                        return task.id.includes(dni);
                })
                if (findId.length > 0) {
                        console.log("Tasks found:", findId + "\n" + findId.length);
                        return findId;
                    } else {
                        console.log("No tasks found with ID:", dni);
                        return [];
                    }
        }     
//Busqueda binaria implementa un arbol binario a traves del prototipado de dos objetos "Node y Tree_Binary"       
        static searchBinary(){
                const Node = function (task){
                        this.task = task,
                        this.left = null,
                        this.right = null
                }

                const Tree_Binary = function(){                     
                        this.root = null        
                }        
                Tree_Binary.prototype.add = function(task){
                        const newNode = new Node(task);
                          if(this.root === null){
                              this.root = newNode;
                          } else {
                              this.inserNode(this.root,newNode)  
                            }
                }
                Tree_Binary.prototype.inserNode = function(node,newNode){
                 if(newNode.value < node.value){
                     if(node.left === null){
                         node.left = newNode
                     }else {
                         this.inserNode(node.left, newNode)
                      } 
                  } else {
                         if (node.right === null){
                            node.right = newNode
                          } else {
                             this.inserNode(node.right, newNode)
                            }
                    }
                
                }
                Tree_Binary.prototype.inOrder = function(node, result = []) {
                        if (node !== null) {
                            this.inOrder(node.left, result);
                            result.push(node.task);
                            this.inOrder(node.right, result);
                        }
                        return result;
                    };
                
        }
}

      
const task1 = new Task("1", "tarea 1", "alta", "abierto");
const task2 = new Task("2", "tarea 2", "media", "abierto");
const task3 = new Task("3", "tarea 3", "baja", "abierto");
const task4 = new Task("4", "tarea 4", "alta", "abierto");
const task5 = new Task("5", "tarea 6", "media", "abierto");
task1.addTask()
task2.addTask()
task3.addTask()
task4.addTask()
task5.addTask()
console.log(Task.search("2"));
console.log(Task.searchBinary());
