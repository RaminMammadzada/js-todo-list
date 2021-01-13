import { setCurrentProject, getAllProjects, deleteProject, editProject, getCurrentProjectId } from "../data/localStorage"
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
        // console.log(project);
        projectList.appendChild(li);

        li.addEventListener("click", () => {
            setCurrentProject(prjct.id)
            populateHeader();
            populateTodos();
        });

        projectListView.appendChild(projectList);

        // const projectTitle = document.getElementById(`project-title-${prjct.id}`);


        const deleteButton = document.getElementById(`delete-project-btn-${prjct.id}`);
        const editButton = document.getElementById(`edit-project-btn-${prjct.id}`);
        // console.log(deleteButton);
        deleteButton.addEventListener("click", () => {
            deleteProject(prjct.id);
            populateProjects();
        });

        editButton.addEventListener("click", () => {
            modal(prjct, "project");
            // editProject(prjct.id);
            populateProjects(prjct.id);
        });



    })

}

export default populateProjects