import { getAllTodosOfCurrentProject, setLatestTodoId, getLatestTodoId } from "../data/localStorage"

class Todo {
    constructor(title, description, deadline, priority) {
        this.id = Todo.incrementId()
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.done = false;
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

    static incrementId() {

        // if (getAllTodosOfCurrentProject() === null) return 1;
        // else return getAllTodosOfCurrentProject().length + 1;

        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }

    static incrementId() {
        // if (getProjectsCount() === null) return 1;
        // else return getProjectsCount() + 1;
        let latestId;
        if (!getLatestTodoId()) {
            latestId = 1;
        }
        else {
            latestId = parseInt(getLatestTodoId()) + 1;
        }
        setLatestTodoId(latestId);
        return latestId;
    }
}

export default Todo