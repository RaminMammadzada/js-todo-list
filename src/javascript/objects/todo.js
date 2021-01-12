class Todo {
    constructor(title, description, deadline) {
        this.id = "todo-" + Date.now().toString();
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    }

    updateTitle(title) {
        this.title = title;
    }

    updateDescription(description) {
        this.description = description;
    }

    updateDeadline(deadline) {
        this.deadline = deadline;
    }
}

export default Todo