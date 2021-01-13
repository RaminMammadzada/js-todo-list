import modelView from "../views/modelView";
import { editProject } from "../data/localStorage"

const fillModalContent = (obj, itemType) => {
    // Modal content
    let modalContent = document.getElementsByClassName("modal-content")[0];

    let formTitle = modalContent.getElementsByClassName("form-title")[0];
    formTitle.innerText = `Edit ${itemType}`;

    let guidance = modalContent.getElementsByClassName("guidance")[0];
    guidance.innerText = `You can edit the ${itemType} by filling the form below.`;

    let titleInput = modalContent.getElementsByClassName("title-input")[0];
    titleInput.setAttribute("value", obj.title);
    let descriptionInput = modalContent.getElementsByClassName("description-input")[0];
    descriptionInput.setAttribute("value", obj.description);

    let editForm = document.getElementsByClassName("edit-form")[0];
    editForm.addEventListener("submit", () => {
        editProject(obj.id, titleInput.value, descriptionInput.value);
        
        console.log("saved");
    });


}

const modal = (obj, itemType) => {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(modelView())

    // Get the modal
    var myModal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    myModal.style.display = "block";

    fillModalContent(obj, itemType);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        myModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
}

export default modal