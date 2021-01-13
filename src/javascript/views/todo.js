const todo = (id, title, description, deadline, priority, done) => `
<div class="todo d-flex">
    <div>
        <div class="d-flex justify-content-between align-items-center ">
            <div class="todo-title mr-4">
                <h3 class="todo-title-${id}"> ${title} </h3>
            </div>
            <h7 class="mr-4">Deadline: <span class="todo-deadline">${deadline}</span></h7>
            <h7 class="mr-4"">Priority: <span class="todo-priority-${id}">${priority}</span> </h7>
        </div>
        <h8 class="todo-description"> ${description}</h8>    
    </div>
    <div class="todo-buttons d-flex flex-column">
        <button id="delete-todo-btn-${id}"><i class="fas fa-trash-alt"></i> delete</button>
        <button id="edit-todo-btn-${id}"><i class="fas fa-edit"></i> edit</button>
    </div>
</div>`;


export default todo;