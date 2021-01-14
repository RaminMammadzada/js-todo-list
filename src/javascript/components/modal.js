import { modalView, editForm } from '../views/modelView';
import { editProject, editTodo } from '../data/localStorage';

const fillModalContent = (obj, itemType) => {
  // Modal content
  const modalContent = document.getElementsByClassName('modal-content')[0];

  const formTitle = modalContent.getElementsByClassName('form-title')[0];
  formTitle.innerText = `Edit ${itemType}`;

  const guidance = modalContent.getElementsByClassName('guidance')[0];
  guidance.innerText = `You can edit the ${itemType} by filling the form below.`;

  const titleInput = modalContent.getElementsByClassName('title-input')[0];
  titleInput.setAttribute('value', obj.title);
  const descriptionInput = modalContent.getElementsByClassName('description-input')[0];
  descriptionInput.setAttribute('value', obj.description);

  let deadlineInput;
  let priorityInput;
  if (itemType === 'todo') {
    const extraInputForTodo = document.getElementsByClassName('extra-input-for-todo')[0];
    extraInputForTodo.style.display = 'block';

    [deadlineInput] = modalContent.getElementsByClassName('deadline-input');
    deadlineInput.setAttribute('value', obj.deadline);
    [priorityInput] = modalContent.getElementsByClassName('priority-input');
    priorityInput.value = obj.priority;
  }

  const editFormView = document.getElementsByClassName('edit-form')[0];
  editFormView.addEventListener('submit', () => {
    if (itemType === 'project') editProject(obj.id, titleInput.value, descriptionInput.value);
    if (itemType === 'todo') editTodo(obj.id, titleInput.value, descriptionInput.value, deadlineInput.value, priorityInput.value);
  });
};

const modal = (obj, itemType) => {
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(modalView());

  const modelContent = document.getElementsByClassName('modal-content')[0];
  modelContent.appendChild(editForm());

  // Get the modal
  const myModal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  myModal.style.display = 'block';

  fillModalContent(obj, itemType);

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    myModal.style.display = 'none';
    const editFormView = document.getElementsByClassName('edit-form')[0];
    editFormView.remove();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === myModal) {
      myModal.style.display = 'none';
      const editFormView = document.getElementsByClassName('edit-form')[0];
      editFormView.remove();
    }
  };
};

export default modal;