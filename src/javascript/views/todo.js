const todo = (title, description) => `
<div class="todo">
    <div>
        <h5 class="todo-title"> ${title} </h5>
        <h7 class="todo-description"> ${description}</h7>
    </div>
    <div class="todo-buttons">
        <button id="delete-todo-btn">delete</button>
        <button id="edit-todo-btn">edit</button>
    </div>
</div>`;


export default todo;