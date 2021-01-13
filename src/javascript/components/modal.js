import { modalView, editForm } from "../views/modelView";
import { editProject, editTodo } from "../data/localStorage"
import populateTodos from "../data/populateTodos";

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

    let deadlineInput;
    let priorityInput;
    if (itemType === "todo") {
        const extraInputForTodo = document.getElementsByClassName("extra-input-for-todo")[0];
        extraInputForTodo.style.display = "block";

        deadlineInput = modalContent.getElementsByClassName("deadline-input")[0];
        deadlineInput.setAttribute("value", obj.deadline);
        priorityInput = modalContent.getElementsByClassName("priority-input")[0];
        priorityInput.setAttribute("value", obj.priority);
    }

    let editForm = document.getElementsByClassName("edit-form")[0];
    editForm.addEventListener("submit", () => {
        if (itemType === "project") editProject(obj.id, titleInput.value, descriptionInput.value);
        if (itemType === "todo") editTodo(obj.id, titleInput.value, descriptionInput.value, deadlineInput.value, priorityInput.value);

        console.log("saved");
    });
}

const modal = (obj, itemType) => {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(modalView());

    const modelContent = document.getElementsByClassName("modal-content")[0];
    modelContent.appendChild(editForm());

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
        let editFormView = document.getElementsByClassName("edit-form")[0];
        editFormView.remove()

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
            let editFormView = document.getElementsByClassName("edit-form")[0];
            editFormView.remove()
        }
    }
}

export default modal