import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import '../css/styles.css';
import { app } from './app';
import { renderViews } from "./views/renderViews"
import createSampleData from "./data/createSampleData"
import populateData from "./data/populateData"
import populateHeader from "./components/populateHeader"
import { isLocalStorageEmpty } from "./data/localStorage"
import { manipulateProjects, manipulateTodos } from "./manipulateObjects"
import { setCurrentProjectId } from "./data/localStorage";

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

setCurrentProjectId(1);

renderViews()
if (isLocalStorageEmpty()) {
    createSampleData();
}
populateData();
populateHeader();

// addTodoListener()




manipulateProjects()
manipulateTodos()

// app()