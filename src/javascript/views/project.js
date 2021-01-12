const project = (title, description) => `
<div class="project">
    <div>
        <h5 class="project-title"> ${title} </h5>
        <h7 class="project-description"> ${description}</h7>
    </div>
    <div class="project-buttons">
        <button>delete</button>
        <button>edit</button>
    </div>
</div>`;


export default project;