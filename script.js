const addBtn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
    event.preventDefault(); // prevent the page from reloading
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    input.value = ""; // clear the input field
    if (value === "") return;

    // create task
    const task = document.createElement("li");
    task.classList.add("task-card");
    task.setAttribute("data-task", "");
    // create checkbox
    const checkbox = document.createElement("button");
    checkbox.classList.add("task-btn", "task-done-btn");
    checkbox.setAttribute("data-task-done-btn", "");
    checkbox.innerHTML = `<i class="far fa-check-square"></i>`;
    checkbox.addEventListener("click", () => {
        task.classList.toggle("task-done");  // toggle done status
    });
    task.appendChild(checkbox);
    // create task name
    const taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.setAttribute("data-task-name", "");
    taskName.innerText = value;
    task.appendChild(taskName);
    // create trash button
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("task-btn", "task-trash-btn");
    trashBtn.setAttribute("data-task-trash-btn", "");
    trashBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    trashBtn.addEventListener("click", () => {
        task.remove();  // remove the task
    });
    task.appendChild(trashBtn);

    document.querySelector("[data-tasks-list]").appendChild(task);
};

addBtn.addEventListener("click", createTask);
