class Project {
    constructor(title, description) {
        this.id = Project.incrementId()
        this.title = title;
        this.description = description;
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        // TO DO
    }

    updateTitle(title) {
        this.title = title;
    }

    updateDescription(description) {
        this.description = description;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }
}

export default Project