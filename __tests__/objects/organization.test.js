import Organization from '../../src/javascript/objects/organization';
import Project from '../../src/javascript/objects/project';

describe('Organization object', () => {
  const firstOrganization = new Organization('organization 1');
  it('should create Organization object', () => {
    expect(firstOrganization.title).toEqual('organization 1');
  });

  it('should add projects to Organization by using addProject method', () => {
    const project1 = new Project('project 1', 'project 1 description');
    const project2 = new Project('project 2', 'project 2 description');
    firstOrganization.addProject(project1);
    firstOrganization.addProject(project2);
    expect(firstOrganization.projects).toEqual([project1, project2]);
  });
});