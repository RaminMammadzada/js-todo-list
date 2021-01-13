

const projects = () => {

    const projectsDiv = document.createElement("div");

    projectsDiv.innerHTML = `<section>
                                <div class="d-flex justify-content-center">
                                    <input type="text" id="add-project" placeholder="project name" />
                                    <button type="submit" class="add-project-btn"><i class="fas fa-folder-plus"></i> add project</button>
                                </div>
                                <!-- project list -->
                                <div class="project-container">
                                    <div id="project-list"></div>
                                </div>
                            </section>`;
    return projectsDiv;
}

export default projects