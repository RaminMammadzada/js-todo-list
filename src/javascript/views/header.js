const header = () => {
  const header = document.createElement('header');
  header.innerHTML = `<h1> TODO APP </h1>
                        <h3 id="current-project-title">Current Project: <span>Not selected yet!</span> </h3>
                        `;

  return header;
};

export default header;