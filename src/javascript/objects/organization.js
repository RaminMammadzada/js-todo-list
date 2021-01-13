class Organization {
  constructor(title) {
    this.title = title;
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }
}

export default Organization;