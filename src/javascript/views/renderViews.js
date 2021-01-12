import header from './header'
import projects from './projects'
import todos from './todos'


const renderViews = () => {
    const body = document.getElementsByTagName("body")[0];

    body.appendChild(header());

    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "d-flex flex-row justify-content-around pt-3");
    mainDiv.appendChild(projects());
    mainDiv.appendChild(todos());

    body.appendChild(mainDiv)

}


export { renderViews }