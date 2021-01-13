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

const editProject = (projectId, title, description) => {
    const organization = JSON.parse(localStorage.getItem("organization"))
    const allProjects = organization["projects"]
    allProjects.map(project => {
        if (project.id.toString() === projectId.toString()) {
            project.title = title;
            project.description = description;
        }
    })
    localStorage.setItem("organization", JSON.stringify(organization));
}

const deleteProject = (projectId) => {
    console.log("delete " + projectId)
    const organization = JSON.parse(localStorage.getItem("organization"))
    const allProjects = organization["projects"]
    organization["projects"] = allProjects.reduce((acc, project) => {
        if (project.id.toString() !== projectId.toString()) {
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

const editTodo = (todoId, title, description) => {
    
}

const deleteTodo = (todoId) => {
    console.log("delete " + todoId)
    const organization = JSON.parse(localStorage.getItem("organization"))
    const allProjects = organization["projects"]
    allProjects.map(project => {
        if (project.id.toString() === getCurrentProjectId()) {
            project.todos = project.todos.reduce((acc, todo) => {
                if (todo.id.toString() !== todoId.toString()) {
                    acc.push(todo)
                }
                return acc;
            }, []);
        }
    })
    localStorage.setItem("organization", JSON.stringify(organization));
}


const getAllProjects = () => {
    if (JSON.parse(localStorage.getItem("organization")) === null) return null;
    else return JSON.parse(localStorage.getItem("organization"))["projects"];
}

const getProjectsCount = () => {
    if (getAllProjects() === null) return null;
    else return getAllProjects().length;
}

const setCurrentProject = (id) => {
    localStorage.setItem("currentProjectId", id);
}

const getCurrentProjectId = () => {
    return localStorage.getItem("currentProjectId");
}

const getCurrentProject = () => {
    const allProjects = getAllProjects()
    if (allProjects === null) return null;
    let currentProject = allProjects.filter(function (e) {
        return e.id.toString() === getCurrentProjectId();
    });

    return currentProject[0];
}

const getAllTodosOfCurrentProject = () => {

    if (getCurrentProject() === undefined || getCurrentProject() === null) {
        return null;
    } else {
        return getCurrentProject().todos;
    }
}

const setLatestProjectId = (value) => {
    localStorage.setItem("latestProjectId", value);
}

const getLatestProjectId = () => {
    return localStorage.getItem("latestProjectId");
}

const setLatestTodoId = (value) => {
    localStorage.setItem("latestTodoId", value);
}

const getLatestTodoId = () => {
    return localStorage.getItem("latestTodoId");
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
    isLocalStorageEmpty,
    getProjectsCount,
    editTodo,
    deleteTodo,
    setLatestProjectId,
    getLatestProjectId,
    setLatestTodoId,
    getLatestTodoId
}