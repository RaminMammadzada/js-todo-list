import { getAllTodosOfCurrentProject, deleteTodo, editTodoDone } from "../data/localStorage"
import todo from "../views/todo"
import modal from "../components/modal"

const populateTodos = () => {
    const todoListView = document.getElementById("todo-list");
    todoListView.innerHTML = "";
    const todoList = document.createElement("ul");


    const todos = getAllTodosOfCurrentProject()

    if (todos !== null) {
        todos.forEach(td => {
            let li = document.createElement("li");
            li.innerHTML = todo(td.id, td.title, td.description, td.deadline, td.priority, td.done)
            todoList.appendChild(li);

            todoListView.appendChild(todoList);

            const todoTitle = document.getElementsByClassName(`todo-title-${td.id}`)[0];

            if (td.done === true) {
                todoTitle.style.color = "#ffffff";
                todoTitle.style.textDecoration = "line-through";
            }
            else {
                todoTitle.style.color = "#a8ccec";
                todoTitle.style.textDecoration = "none";
            }

            todoTitle.addEventListener("click", () => {
                td.done = !td.done;
                editTodoDone(td.id, td.done);
                populateTodos();
            });



            // const projectTitle = document.getElementById(`project-title-${prjct.id}`);


            const deleteButton = document.getElementById(`delete-todo-btn-${td.id}`);
            const editButton = document.getElementById(`edit-todo-btn-${td.id}`);
            // console.log(deleteButton);
            deleteButton.addEventListener("click", () => {
                deleteTodo(td.id);
                populateTodos();
            });

            editButton.addEventListener("click", () => {
                modal(td, "todo");
                // editTodo(prjct.id);
                populateTodos();
            });
        });
    }

    todoListView.appendChild(todoList);
}

export default populateTodos