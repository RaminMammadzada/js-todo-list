

const todos = () => {

    const todoDiv = document.createElement("div");

    todoDiv.innerHTML = `<section>
                                <div class="">
                                    <input type="text" id="add-todo" placeholder="todo name" />
                                    <button type="submit" class="add-todo-btn">add todo</button>
                                </div>
                                <!-- todo list -->
                                <div class="todo-container">
                                    <div class="todo-list"></div>
                                </div>
                            </section>`;

    return todoDiv;
}

export default todos