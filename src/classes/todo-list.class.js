import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        //La logica es que si la tarea esta sin comlletar por defecto es "False" pero sino es el contrario "!todo.completado" osea True
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos)); //EL JSON.STRINGIFY ES UN METODO PARA TRANSFORMAR UN [objet Objet] en un STRING
  }

  cargarLocalStorage() {
    // this.todos = this.todos ? [] : JSON.parse(localStorage.getItem("todo")); // solucion mia
    this.todos = localStorage.getItem("todo") //solucion de Fernando herrera
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }
}
