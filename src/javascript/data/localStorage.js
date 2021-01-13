const addToLocalStorage = () => {
  localStorage.setItem('name', 'Obaseki Nosa');
};

const isLocalStorageEmpty = () => {
  // console.log(JSON.parse(localStorage.getItem("organization")))
  if (JSON.parse(localStorage.getItem('organization')) === null) {
    return true;
  }
  return false;
};

const getAllProjects = () => {
  if (JSON.parse(localStorage.getItem('organization')) === null) return null;
  return JSON.parse(localStorage.getItem('organization')).projects;
};

const getCurrentProjectId = () => localStorage.getItem('currentProjectId');

const getCurrentProject = () => {
  const allProjects = getAllProjects();
  if (allProjects === null) return null;
  const currentProject = allProjects.filter((e) => e.id.toString() === getCurrentProjectId());

  return currentProject[0];
};

const addNewProject = (newProject) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  organization.projects.push(newProject);
  localStorage.setItem('organization', JSON.stringify(organization));
};

const editProject = (projectId, title, description) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  allProjects.map(project => {
    if (project.id.toString() === projectId.toString()) {
      project.title = title;
      project.description = description;
    }
    return '';
  });
  localStorage.setItem('organization', JSON.stringify(organization));
};

const deleteProject = (projectId) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  organization.projects = allProjects.reduce((acc, project) => {
    if (project.id.toString() !== projectId.toString()) {
      acc.push(project);
    }
    return acc;
  }, []);
  // console.log(organization["projects"]);
  localStorage.setItem('organization', JSON.stringify(organization));
};


const addNewTodo = (newTodo) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  allProjects.map(project => {
    if (project.id.toString() === getCurrentProjectId()) {
      project.todos.push(newTodo);
    }
    return '';
  });
  localStorage.setItem('organization', JSON.stringify(organization));
};

const editTodo = (todoId, title, description, deadline, priority) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  allProjects.map(project => {
    if (project.id.toString() === getCurrentProjectId()) {
      project.todos.map(todo => {
        if (todo.id === todoId) {
          todo.title = title;
          todo.description = description;
          todo.deadline = deadline;
          todo.priority = priority;
          todo.done = false;
        }
        return '';
      });
    }
    return '';
  });
  localStorage.setItem('organization', JSON.stringify(organization));
};

const editTodoDone = (todoId, isItDone) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  allProjects.map(project => {
    if (project.id.toString() === getCurrentProjectId()) {
      project.todos.map(todo => {
        if (todo.id === todoId) {
          todo.done = isItDone;
        }
        return '';
      });
    }
    return '';
  });
  localStorage.setItem('organization', JSON.stringify(organization));
};

const deleteTodo = (todoId) => {
  const organization = JSON.parse(localStorage.getItem('organization'));
  const allProjects = organization.projects;
  allProjects.map(project => {
    if (project.id.toString() === getCurrentProjectId()) {
      project.todos = project.todos.reduce((acc, todo) => {
        if (todo.id.toString() !== todoId.toString()) {
          acc.push(todo);
        }
        return acc;
      }, []);
    }
    return '';
  });
  localStorage.setItem('organization', JSON.stringify(organization));
};

const getProjectsCount = () => {
  if (getAllProjects() === null) return null;
  return getAllProjects().length;
};

const setCurrentProjectId = (id) => {
  localStorage.setItem('currentProjectId', id);
};

const getAllTodosOfCurrentProject = () => {
  if (getCurrentProject() === undefined || getCurrentProject() === null) {
    return null;
  }
  return getCurrentProject().todos;
};

const setLatestProjectId = (value) => {
  localStorage.setItem('latestProjectId', value);
};

const getLatestProjectId = () => localStorage.getItem('latestProjectId');

const setLatestTodoId = (value) => {
  localStorage.setItem('latestTodoId', value);
};

const getLatestTodoId = () => localStorage.getItem('latestTodoId');

export {
  addToLocalStorage,
  getAllProjects,
  setCurrentProjectId,
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
  getLatestTodoId,
  editTodoDone,
};