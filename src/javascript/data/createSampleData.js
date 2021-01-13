import Todo from "../objects/todo"
import Project from "../objects/project"
import Organization from "../objects/organization"

const createSampleData = () => {
    const organization = new Organization("Remki Design Company")
    const project1 = new Project("project 1", "description for project 1")
    const todo1 = new Todo("todo 1", "descr for todo1", "2021-01-12", "High", false)
    const todo2 = new Todo("todo 2", "descr for todo1", "2021-02-13", "Low", false)
    const todo3 = new Todo("todo 3", "descr for todo1", "2021-01-14", "Medium", false)
    project1.addTodo(todo1)
    project1.addTodo(todo2)
    project1.addTodo(todo3)
    organization.addProject(project1)
    const project2 = new Project("project 2", "description for project 2")
    const todo4 = new Todo("todo 4", "descr for todo1", "2021-03-15", "High", false)
    const todo5 = new Todo("todo 5", "descr for todo1", "2021-04-16", "Low", false)
    const todo6 = new Todo("todo 6", "descr for todo1", "2021-05-17", "Medium", false)
    project2.addTodo(todo4)
    project2.addTodo(todo5)
    project2.addTodo(todo6)
    organization.addProject(project2)
    const project3 = new Project("project 3", "description for project 3")
    const todo7 = new Todo("todo 7", "descr for todo1", "2021-06-18", "High", false)
    const todo8 = new Todo("todo 8", "descr for todo1", "2021-07-19", "Low", false)
    const todo9 = new Todo("todo 9", "descr for todo1", "2021-08-20", "Medium", false)
    project3.addTodo(todo7)
    project3.addTodo(todo8)
    project3.addTodo(todo9)
    organization.addProject(project3)
    localStorage.setItem("organization", JSON.stringify(organization));

}

export default createSampleData