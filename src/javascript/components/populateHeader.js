import { getCurrentProject } from "../data/localStorage"

const populateHeader = () => {
    const header = document.getElementsByTagName("header")[0];
    console.log(header);
    const titleInHeader = header.getElementsByTagName("span")[0];
    console.log(titleInHeader);
    titleInHeader.innerText = getCurrentProject().title;
}

export default populateHeader