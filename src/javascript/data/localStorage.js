const addToLocalStorage = () => {
    localStorage.setItem('name', 'Obaseki Nosa');
}

const updateOrganizationInLocalstore = (organization) => {
    localStorage.setItem("organization", JSON.stringify(organization));
}

const updateProjectsInLocalStorage = () => {
    return
}

const isLocalStorageEmpty = () => {
    // console.log(JSON.parse(localStorage.getItem("organization")))
    if (JSON.parse(localStorage.getItem("organization")) === null) {
        return true;
    } else {
        return false;
    }
}

const addNewProject = (newProject) => {
    const organization = JSON.parse(localStorage.getItem("organization"))
    organization["projects"].push(newProject)
    localStorage.setItem("organization", JSON.stringify(organization));
}

const editProject = (id) => {
    console.log("edit " + id)
    // const organization = JSON.parse(localStorage.getItem("organization"))
    // const allProjects = organization["projects"]
    // allProjects.map(project => {
    //     if (project.id.toString() === getCurrentProjectId()) {
    //         project.todos.push(newTodo);
    //         console.log(allProjects);
    //     }
    // })
    // localStorage.setItem("organization", JSON.stringify(organization));

}

const deleteProject = (id) => {
    console.log("delete " + id)
    const organization = JSON.parse(localStorage.getItem("organization"))
    const allProjects = organization["projects"]
    organization["projects"] = allProjects.reduce((acc, project) => {
        if (project.id.toString() !== id.toString()) {
            acc.push(project)
        }
        return acc;
    }, [])
    // console.log(organization["projects"]);
    localStorage.setItem("organization", JSON.stringify(organization));
}


const addNewTodo = (newTodo) => {

    const organization = JSON.parse(localStorage.getItem("organization"))
    const allProjects = organization["projects"]
    allProjects.map(project => {
        if (project.id.toString() === getCurrentProjectId()) {
            project.todos.push(newTodo);
            console.log(allProjects);
        }
    })
    localStorage.setItem("organization", JSON.stringify(organization));
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

    if (getCurrentProject() === undefined) {
        return null;
    } else {
        return getCurrentProject().todos;
    }


}

export {
    addToLocalStorage,
    getAllProjects,
    setCurrentProject,
    getCurrentProjectId,
    getCurrentProject,
    getAllTodosOfCurrentProject,
    addNewProject,
    editProject,
    deleteProject,
    addNewTodo,
    isLocalStorageEmpty
}