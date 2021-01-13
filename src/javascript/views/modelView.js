const modal = () => {
  const div = document.createElement("div");

  div.innerHTML = `
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 class="form-title">Form Title</h3>
      <p class="guidance"></p>
      <form class="edit-form" enctype="multipart/form-data">
          <div>
            <label>Title</label>
            <input class="title-input" value="">
          </div>
          <div>
            <label>Description</label>
            <input class="description-input" value="">
          </div>
          
          <button type="submit" class="save-changes-btn">Save</button>
      </form>
    </div>  
  
  </div>`;

  return div;
}


export default modal;