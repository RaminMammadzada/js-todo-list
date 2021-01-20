import Project from '../../src/javascript/objects/project';
import Todo from '../../src/javascript/objects/todo';
import header from '../../src/javascript/views/header';
import populateHeader from '../../src/javascript/components/populateHeader';
import { addNewProject, setCurrentProjectId } from '../../src/javascript/data/localStorage';

import modal from '../../src/javascript/components/modal';

describe('Populate Modal for Project edit', () => {
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(header());

  const firstProject = new Project('title 1', 'project 1 description');
  addNewProject(firstProject);
  setCurrentProjectId(firstProject.id);

  populateHeader();

  modal(firstProject, 'project');

  it('should create a modal to edit Project object', () => {
    const myModal = document.getElementById('myModal');
    const modalContent = document.getElementsByClassName('modal-content')[0];
    const titleInput = modalContent.getElementsByClassName('title-input')[0];
    const descriptionInput = modalContent.getElementsByClassName('description-input')[0];
    const deadlineInput = modalContent.getElementsByClassName('deadline-input');
    const priorityInput = modalContent.getElementsByClassName('priority-input');

    expect(myModal).toBeDefined();
    expect(myModal.style.display).toEqual('block');

    expect(titleInput).toBeDefined();
    expect(descriptionInput).toBeDefined();
    expect(deadlineInput.style).toBeUndefined();
    expect(priorityInput.style).toBeUndefined();
  });
});


describe('Populate Modal for Todo edit', () => {
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(header());

  const firstProject = new Project('project 1', 'project 1 description');
  const todo1 = new Todo('title1', 'sample description 1', '2021-08-20', 'High');
  firstProject.addTodo(todo1);

  addNewProject(firstProject);
  setCurrentProjectId(firstProject.id);

  populateHeader();

  modal(todo1, 'todo');

  it('should create a modal to edit Todo object', () => {
    const myModal = document.getElementById('myModal');
    const modalContent = document.getElementsByClassName('modal-content')[0];
    const titleInput = modalContent.getElementsByClassName('title-input')[0];
    const descriptionInput = modalContent.getElementsByClassName('description-input')[0];
    const deadlineInput = modalContent.getElementsByClassName('deadline-input');
    const priorityInput = modalContent.getElementsByClassName('priority-input');

    expect(myModal).toBeDefined();
    expect(myModal.style.display).toEqual('block');
    expect(titleInput).toBeDefined();
    expect(descriptionInput).toBeDefined();
    expect(deadlineInput).toBeDefined();
    expect(priorityInput).toBeDefined();
  });
});
