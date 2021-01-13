const modalView = () => {
  const div = document.createElement("div");

  div.innerHTML = `
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 class="form-title">Form Title</h3>
      <p class="guidance"></p>
    </div>  
  
  </div>`;

  return div;
}


const editForm = () => {
  const form = document.createElement("form");
  form.setAttribute("class", "edit-form");
  form.setAttribute("enctype", "multipart/form-data");
  form.innerHTML = `
          <div>
            <label>Title</label>
            <input class="title-input" value="">
          </div>
          <div>
            <label>Description</label>
            <input class="description-input" value="">
          </div>
          <div class="extra-input-for-todo">
            <div>
              <label>Deadline</label>
              <input class="deadline-input" value="">
            </div>
            <div>
            <label for="priority">Priority:</label>

            <select class="priority-input" id="priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            </div>
          </div>
          
          <button type="submit" class="save-changes-btn">Save</button>`;

  return form;
}

export { modalView, editForm }