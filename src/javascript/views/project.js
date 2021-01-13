const project = (id, title, description) => `
<div class="project">
    <div>
        <div class="project-title">
            <h3 class="project-title-${id}"> ${title} </h3>
        </div>
        <p class="project-description"> ${description}</p>
    </div>
    <div class="project-buttons">
        <button id="delete-project-btn-${id}">delete</button>
        <button id="edit-project-btn-${id}">edit</button>
    </div>
</div>`;


export default project;