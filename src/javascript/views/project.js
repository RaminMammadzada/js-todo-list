const project = (id, title, description) => `
<div class="project">
    <div>
        <h5 class="project-title"> ${title} </h5>
        <h7 class="project-description"> ${description}</h7>
    </div>
    <div class="project-buttons">
        <button id="delete-project-btn-${id}">delete</button>
        <button id="edit-project-btn-${id}">edit</button>
    </div>
</div>`;


export default project;