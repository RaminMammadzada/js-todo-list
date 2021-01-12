import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import '../css/styles.css';
import { app } from './app';
import { renderViews } from "./views/renderViews"
import createSampleData from "./data/createSampleData"
import populateData from "./data/populateData"
import populateHeader from "./components/populateHeader"

import { fillViewsWithData } from "./fillViewsWithData"

renderViews()
createSampleData();
populateData();
populateHeader();



//fillViewsWithData()
// app()