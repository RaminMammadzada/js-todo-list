// import sampleProjects from "./data/sampleProjects"
import { addNewProject } from "./data/localStorage";
import populateProjects from "./data/populateProjects";
import Project from "./objects/project";


const fillViewsWithData = () => {

    const newProjectInput = document.getElementById("add-project");
    const addProjectButton = document.getElementsByClassName("add-project-btn")[0];
    addProjectButton.addEventListener("click", (e) => {
        const newProject = new Project(newProjectInput.value, "custom description")
        addNewProject(newProject);
        populateProjects();
    })

}

export { fillViewsWithData }