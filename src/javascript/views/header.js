

const header = () => {

    const header = document.createElement("div");

    header.innerHTML = `<header>
                            <h1> TODO APP </h1>
                            <h3 id="current-project-title">Current Project: <span>Not selected yet!</span> </h3>
                        </header>`;

    return header;
}

export default header