class Task { //Clase Tarea la cual tiene cinco propiedades y 3 metodos
        static managerTasks = [];   
        constructor(id, descriptions, priority, state) {
          this.id = id;
          this.descriptions = descriptions;
          this.priority = priority;
          this.state = state;
        }    
        addTask() { //Metodo para hacer push al array managerTask 
          const newTask = {
            id: this.id,
            description: this.descriptions,
            priority: this.priority,
            state: this.state
          };
          Task.managerTasks.push(newTask);
          localStorage.setItem('tasks', JSON.stringify(Task.managerTasks));//Envia al local Storage Api Builder
        }
        static search(dni){ // Metodo para buscar por ID con la propiedad filter
                console.log("analizando")
                const findId = Task.managerTasks.filter(task => {
                        return task.id.includes(dni);
                })
                if (findId.length > 0) {
                        console.log("Tarea encontrada:", findId + "\n" + findId.length);
                        return findId;
                    } else {
                        console.log("Tarea no econtrada con el ID:", dni);
                        return [];
                    }
        }            
        static searchBinary(){ //Busqueda binaria implementa un arbol binario a traves del prototipado de dos objetos "Node y Tree_Binary"
                const Node = function (task){ //Nodo
                        this.task = task,
                        this.left = null,
                        this.right = null
                }
                const Tree_Binary = function(){ //Arbol               
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
                 if(newNode.task.id < node.task.id){
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
                    const tree = new Tree_Binary();
                    Task.managerTasks.forEach(task => tree.add(task));
                    const sortedTasks = tree.inOrder(tree.root); // Realizar un recorrido en orden para obtener las tareas ordenadas por ID
                    console.log("Tasks sorted by ID:", sortedTasks);
                    return sortedTasks;      
        }
        
}

export { Task }; 