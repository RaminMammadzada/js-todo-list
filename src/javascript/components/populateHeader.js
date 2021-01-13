import { getCurrentProject } from '../data/localStorage';

const populateHeader = () => {
  const header = document.getElementsByTagName('header')[0];
  const titleInHeader = header.getElementsByTagName('span')[0];

  if (getCurrentProject() !== undefined) {
    titleInHeader.innerText = getCurrentProject().title;
  }
};

export default populateHeader;