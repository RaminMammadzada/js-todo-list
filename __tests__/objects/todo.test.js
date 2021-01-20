import Todo from '../../src/javascript/objects/todo';
import { getLatestTodoId } from '../../src/javascript/data/localStorage';

describe('Todo object', () => {
  const firstTodo = new Todo('title1', 'sample description 1', '2021-08-20', 'High');
  const latestTodoIdAfterFirstTodoCreated = getLatestTodoId();
  it('should create Todo object for the first time with id value 1', () => {
    expect(firstTodo.title).toEqual('title1');
    expect(firstTodo.description).toEqual('sample description 1');
    expect(firstTodo.deadline).toEqual('2021-08-20');
    expect(firstTodo.priority).toEqual('High');
    expect(firstTodo.id).toBe(parseInt(latestTodoIdAfterFirstTodoCreated, 10));
  });

  const secondTodo = new Todo('title2', 'sample description 2', '2021-09-11', 'Low');
  const latestTodoIdAfterSecondTodoCreated = getLatestTodoId();
  it('should create Todo object second time with id value 2, the incremented version of latest id', () => {
    expect(secondTodo.title).toEqual('title2');
    expect(secondTodo.description).toEqual('sample description 2');
    expect(secondTodo.deadline).toEqual('2021-09-11');
    expect(secondTodo.priority).toEqual('Low');
    expect(secondTodo.id).toBe(parseInt(latestTodoIdAfterSecondTodoCreated, 10));
  });
});