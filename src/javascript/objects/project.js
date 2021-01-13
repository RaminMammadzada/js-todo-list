import { setLatestProjectId, getLatestProjectId } from '../data/localStorage';

class Project {
  constructor(title, description) {
    this.id = Project.incrementId();
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  static incrementId() {
    let latestId;
    if (!getLatestProjectId()) {
      latestId = 1;
    } else {
      latestId = parseInt(getLatestProjectId(), 10) + 1;
    }
    setLatestProjectId(latestId);
    return latestId;
  }
}

export default Project;