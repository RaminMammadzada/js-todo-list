import Project from '../../src/javascript/objects/project';
import Todo from '../../src/javascript/objects/todo';
import { getLatestProjectId } from '../../src/javascript/data/localStorage';

describe('Project object', () => {
  const firstProject = new Project('title 1', 'project 1 description');
  const latestProjectIdAfterFirstProjectCreated = getLatestProjectId();
  it('should create Project object for the first time with id value 1', () => {
    expect(firstProject.title).toEqual('title 1');
    expect(firstProject.description).toEqual('project 1 description');
    expect(firstProject.id).toBe(parseInt(latestProjectIdAfterFirstProjectCreated, 10));
  });


  it('should add todos to project by using addTodo method', () => {
    const todo1 = new Todo('title1', 'sample description 1', '2021-08-20', 'High');
    const todo2 = new Todo('title2', 'sample description 2', '2022-02-11', 'Low');
    firstProject.addTodo(todo1);
    firstProject.addTodo(todo2);
    expect(firstProject.todos).toEqual([todo1, todo2]);
  });

  it('should increase last project id by one and update last project id value in local storage', () => {
    const sum = parseInt(latestProjectIdAfterFirstProjectCreated, 10) + 1;
    expect(Project.incrementId()).toEqual(sum);
  });
});