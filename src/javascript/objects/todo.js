import { setLatestTodoId, getLatestTodoId } from '../data/localStorage';

class Todo {
  constructor(title, description, deadline, priority) {
    this.id = Todo.incrementId();
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    this.done = false;
  }

  static incrementId() {
    let latestId;
    if (!getLatestTodoId()) {
      latestId = 1;
    } else {
      latestId = parseInt(getLatestTodoId(), 10) + 1;
    }
    setLatestTodoId(latestId);
    return latestId;
  }
}
export default Todo;