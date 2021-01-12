class Organization {
    constructor(title) {
        this.title = title;
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(project) {
        // TO DO
    }

    updateTitle(title) {
        this.title = title;
    }
}

export default Organization