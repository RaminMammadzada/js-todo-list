import { getAllTodosOfCurrentProject } from "../data/localStorage"
import todo from "../views/todo"

const populateTodos = () => {
    const todoListView = document.getElementById("todo-list");
    todoListView.innerHTML = "";
    const todoList = document.createElement("ul");


    const todos = getAllTodosOfCurrentProject()

    if (todos !== null) {
        todos.forEach(td => {
            let li = document.createElement("li");
            li.innerHTML = todo(td.title, td.description)
            todoList.appendChild(li);
        })
    }

    todoListView.appendChild(todoList);
}

export default populateTodos