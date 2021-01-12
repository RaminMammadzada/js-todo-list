import { getAllTodosOfCurrentProject } from "../data/localStorage"
import todo from "../views/todo"

const populateTodos = () => {
    const todoListView = document.getElementById("todo-list");
    const todoList = document.createElement("ul");

    const todos = getAllTodosOfCurrentProject()

    todos.forEach(project => {
        let li = document.createElement("li");
        li.innerHTML = todo(project.title, project.description)
        todoList.appendChild(li);
    })

    todoListView.appendChild(todoList);
}

export default populateTodos