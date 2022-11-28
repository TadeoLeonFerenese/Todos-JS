import { todoList } from "..";

export class Todo {
  // El static sirve para que llave como obj y no instancas del todo
  static fromJson({ id, tarea, completado, creado }) {
    const tempTodo = new todoList(tarea);

    tempTodo.id = id;
    tempTodo.completado = completado;
    tempTodo.creado = creado;

    return tempTodo;
  }

  constructor(tarea) {
    this.tarea = tarea;

    this.id = new Date().getTime(); //Utilizo la hs actual para que me de siempre un numero diferente y ese numero sea un id
    this.completado = false;
    this.creado = new Date();
  }

  imprimirClase() {
    console.log(`${this.tarea} - ${this.id}`);
  }
}
