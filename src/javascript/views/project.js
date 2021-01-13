const project = (id, title, description) => `
<div class="project d-flex flex-row justify-content-center align-items-start">
    <div>
        <div class="project-title">
            <h3 class="project-title-${id}"> ${title} </h3>
        </div>
        <p class="project-description"> ${description}</p>
    </div>
    <div class="project-buttons d-flex justify-content-end ">
        <button id="delete-project-btn-${id}"><i class="fas fa-trash-alt"></i> delete</button>
        <button id="edit-project-btn-${id}"><i class="fas fa-edit"></i>edit</button>
    </div>
</div>`;


export default project;