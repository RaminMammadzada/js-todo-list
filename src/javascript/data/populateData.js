import populateProjects from "./populateProjects"
import populateTodos from "./populateTodos"

const populateData = () => {
    populateProjects()
    populateTodos()
}

export default populateData