import { setCurrentProjectId, getAllProjects, deleteProject, editProject, getCurrentProjectId } from "../data/localStorage"
import populateHeader from "../components/populateHeader"
import populateTodos from "../data/populateTodos"
import project from "../views/project"
import modal from "../components/modal"

const populateProjects = () => {
    const projectListView = document.getElementById("project-list");
    const projectList = document.createElement("ul");
    projectListView.innerHTML = "";
    const projects = getAllProjects();

    projects.forEach(prjct => {
        let li = document.createElement("li");
        li.innerHTML = project(prjct.id, prjct.title, prjct.description);

        projectList.appendChild(li);

        projectListView.appendChild(projectList);

        const projectTitle = document.getElementsByClassName(`project-title-${prjct.id}`)[0];
        projectTitle.addEventListener("click", () => {
            setCurrentProjectId(prjct.id)
            populateHeader();
            populateTodos();
        });

        const deleteButton = document.getElementById(`delete-project-btn-${prjct.id}`);
        const editButton = document.getElementById(`edit-project-btn-${prjct.id}`);
        deleteButton.addEventListener("click", () => {
            deleteProject(prjct.id);
            populateProjects();
        });

        editButton.addEventListener("click", () => {
            modal(prjct, "project");
            populateProjects(prjct.id);
        });



    })

}

export default populateProjects