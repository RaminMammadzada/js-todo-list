const addToLocalStorage = () => {
    localStorage.setItem('name', 'Obaseki Nosa');
}

const updateProjectsInLocalStorage = () => {

}

const getAllProjects = () => {
    return JSON.parse(localStorage.getItem("organization"))["projects"];
}

const setCurrentProject = (id) => {
    localStorage.setItem("currentProjectId", id);
}

const getCurrentProjectId = () => {
    return localStorage.getItem("currentProjectId");
}

const getCurrentProject = () => {
    const allProjects = getAllProjects()
    let currentProject = allProjects.filter(function (e) {
        return e.id.toString() === getCurrentProjectId();
    });

    return currentProject[0];
}

const getAllTodosOfCurrentProject = () => {
    return getCurrentProject().todos;
}

export {
    addToLocalStorage,
    getAllProjects,
    setCurrentProject,
    getCurrentProjectId,
    getCurrentProject,
    getAllTodosOfCurrentProject
}