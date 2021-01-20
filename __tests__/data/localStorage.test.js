import Project from '../../src/javascript/objects/project';
import Todo from '../../src/javascript/objects/todo';

import {
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
  editTodo,
  deleteTodo,
} from '../../src/javascript/data/localStorage';

describe('Check local storage methods', () => {
  // const organization1 = new Organization('organization 1');
  const project1 = new Project('project 1', 'project 1 description');
  const project2 = new Project('project 2', 'project 2 description');
  const project3 = new Project('project 3', 'project 3 description');
  const todo1 = new Todo('title1', 'sample description 1', '2021-08-20', 'High');
  const todo2 = new Todo('title2', 'sample description 2', '2022-02-11', 'Low');
  const todo4 = new Todo('title4', 'sample description 4', '2023-01-14', 'High');
  project1.addTodo(todo1);
  project1.addTodo(todo2);

  it('should return true if local storage is empty', () => {
    expect(isLocalStorageEmpty()).toBeTruthy();
  });

  it('should return false if local storage is not empty', () => {
    addNewProject(project1);
    expect(isLocalStorageEmpty()).toBeFalsy();
  });

  it('should return all projects', () => {
    addNewProject(project2);
    expect(getAllProjects()).toEqual([project1, project2]);
  });

  it('should return current project ID', () => {
    setCurrentProjectId(project1.id);
    expect(getCurrentProjectId()).toEqual(project1.id.toString());
  });

  it('should return current project', () => {
    setCurrentProjectId(project2.id);
    expect(getCurrentProject()).toEqual(project2);
  });

  it('should add new project', () => {
    addNewProject(project3);
    expect(getAllProjects().filter(project => project.id === project3.id)).toBeDefined();
  });


  it('should edit the given project', () => {
    editProject(project1.id, 'project 1 updated', 'project 1 description updated');
    expect(getAllProjects().filter(project => project.id === project1)).toBeDefined();
    const {
      title,
      description,
    } = getAllProjects().filter(project => project.id === project1.id)[0];
    expect(title).toEqual('project 1 updated');
    expect(description).toEqual('project 1 description updated');
  });

  it('should delete the given by project ID referance', () => {
    expect(getAllProjects().filter(project => project.id === project3.id)).not.toBe([]);
    deleteProject(project3.id);
    expect(getAllProjects().filter(project => project.id === project3.id)).toEqual([]);
  });

  it('should return all Todos of the currentProject', () => {
    setCurrentProjectId(project1.id);
    expect(getAllTodosOfCurrentProject()).toEqual(project1.todos);
  });

  it('should add new Todos to the currentProject', () => {
    setCurrentProjectId(project1.id);
    addNewTodo(todo4);
    expect(getAllTodosOfCurrentProject().filter(td => td.id === todo4.id)).not.toBe([]);
  });

  it('should edit Todo by getting ID and other properties, it is one of the current project todos', () => {
    editTodo(todo4.id, 'title 4 updated', 'sample description 4 updated', '2025-08-04', 'High');
    expect(getAllTodosOfCurrentProject().filter(td => td.id === todo4.id)).toBeDefined();
    const {
      title,
      description,
      deadline,
      priority,
    } = getAllTodosOfCurrentProject().filter(td => td.id === todo4.id)[0];

    expect(title).toEqual('title 4 updated');
    expect(description).toEqual('sample description 4 updated');
    expect(deadline).toEqual('2025-08-04');
    expect(priority).toEqual('High');
  });

  it('should delete the Todos by getting the id only as a referance', () => {
    expect(getAllTodosOfCurrentProject().filter(td => td.id === todo4.id)).not.toBe([]);
    deleteTodo(todo4.id);
    expect(getAllTodosOfCurrentProject().filter(td => td.id === todo4.id)).toEqual([]);
  });
});