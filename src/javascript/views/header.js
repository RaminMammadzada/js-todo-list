

const header = () => {

    const header = document.createElement("div");

    header.innerHTML = `<header>
                            <h1> TODO APP </h1>
                            <h3 id="current-project"> current project name will be here </h3>
                        </header>`;

    return header;
}

export default header