

const todos = () => {

    const todoDiv = document.createElement("div");

    todoDiv.innerHTML = `<section>
                                <div class="d-flex justify-content-center">
                                    <input type="text" id="add-todo" placeholder="todo name" />
                                    <button type="submit" class="add-todo-btn">add todo</button>
                                </div>
                                <!-- todo list -->
                                <div class="todo-container">
                                    <div id="todo-list"></div>
                                </div>
                            </section>`;

    return todoDiv;
}

export default todos