const todo = (id, title, description, deadline, priority, done) => `
<div class="todo">
    <div>
        <div class="todo-title">
            <h5 class="todo-title-${id}"> ${title} </h5>
        </div>
        <h7 class="todo-description"> ${description}</h7>
    </div>
    <div class="mx-5">
        <h5 class="todo-deadline"> ${deadline} </h5>
        <h7 class="todo-priority-${id}"> ${priority}</h7>
    </div>
    <div class="todo-buttons">
        <button id="delete-todo-btn-${id}">delete</button>
        <button id="edit-todo-btn-${id}">edit</button>
    </div>
</div>`;


export default todo;