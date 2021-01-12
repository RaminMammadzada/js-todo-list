import { setCurrentProject, getAllProjects } from "../data/localStorage"
import populateHeader from "../components/populateHeader"
import populateTodos from "../data/populateTodos"
import project from "../views/project"
const populateProjects = () => {
    const projectListView = document.getElementById("project-list");
    const projectList = document.createElement("ul");
    projectListView.innerHTML = "";
    const projects = getAllProjects();

    projects.forEach(prjct => {
        let li = document.createElement("li");
        li.innerHTML = project(prjct.title, prjct.description)
        // console.log(project);
        projectList.appendChild(li);

        li.addEventListener("click", () => {
            setCurrentProject(prjct.id)
            populateHeader();
            populateTodos();
        });
    })

    projectListView.appendChild(projectList);

}

export default populateProjects