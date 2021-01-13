// import sampleProjects from "./data/sampleProjects"
import { addNewProject, addNewTodo } from "./data/localStorage";
import populateProjects from "./data/populateProjects";
import populateTodos from "./data/populateTodos";
import Project from "./objects/project";
import Todo from "./objects/todo";


const manipulateProjects = () => {

    const newProjectInput = document.getElementById("add-project");
    const addProjectButton = document.getElementsByClassName("add-project-btn")[0];
    addProjectButton.addEventListener("click", (e) => {
        const newProject = new Project(newProjectInput.value, "custom description")
        addNewProject(newProject);
        populateProjects();
        newProjectInput.value = "";
    })
}

const manipulateTodos = () => {
    const newTodoInput = document.getElementById("add-todo");
    const addTodoButton = document.getElementsByClassName("add-todo-btn")[0];
    addTodoButton.addEventListener("click", (e) => {
        const newTodo = new Todo(newTodoInput.value, "todo description", "Janyary 2021", "High");
        addNewTodo(newTodo);
        populateTodos();
        newTodoInput.value = "";
    })
}


export { manipulateProjects, manipulateTodos }