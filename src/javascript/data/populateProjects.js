import { setCurrentProject, getAllProjects } from "../data/localStorage"

const populateProjects = () => {
    const projectListView = document.getElementById("project-list");
    const projectList = document.createElement("ul");

    const projects = getAllProjects();

    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerText = project.title;
        // console.log(project);
        projectList.appendChild(li);

        setCurrentProject(project.id)
    })

    projectListView.appendChild(projectList);

}

export default populateProjects