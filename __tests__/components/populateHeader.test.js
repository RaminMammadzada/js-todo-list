import Project from '../../src/javascript/objects/project';
import header from '../../src/javascript/views/header';
import populateHeader from '../../src/javascript/components/populateHeader';
import { getCurrentProject, addNewProject, setCurrentProjectId } from '../../src/javascript/data/localStorage';

describe('Populate Header', () => {
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(header());

  const firstProject = new Project('title 1', 'project 1 description');
  addNewProject(firstProject);
  setCurrentProjectId(firstProject.id);

  populateHeader();

  const headerView = document.getElementsByTagName('header')[0];
  const titleInHeader = headerView.getElementsByTagName('span')[0];

  it('should populate current project title to header', () => {
    expect(titleInHeader.innerText).toEqual(getCurrentProject().title);
  });
});