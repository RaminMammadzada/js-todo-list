import header from './header'
import projects from './projects'
import todos from './todos'


const renderViews = () => {
    const body = document.getElementsByTagName("body")[0];

    body.appendChild(header());

    const main = document.createElement("main");
    main.setAttribute("class", "d-flex flex-row justify-content-around pt-3");
    main.appendChild(projects());
    main.appendChild(todos());

    body.appendChild(main)

}


export { renderViews }