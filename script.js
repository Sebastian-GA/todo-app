const addBtn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
    event.preventDefault(); // prevent the page from reloading
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    input.value = ""; // clear the input field
    if (value === "") return;

    const task = document.createElement("li");
    task.classList.add("task-card");
    task.setAttribute("data-task", "");

    const content = `<button class="task-btn task-done-btn"><i class="far fa-check-square"></i></button>
                    <span class="task-name">${value}</span>
                    <button class="task-btn task-trash-btn"><i class="fas fa-trash-alt"></i></button>`;
    task.innerHTML = content;

    document.querySelector("[data-tasks-list]").appendChild(task);
};

addBtn.addEventListener("click", createTask);
