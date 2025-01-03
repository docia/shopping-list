const btnClick = document.querySelector("button");
let input = document.querySelector("input");

btnClick.addEventListener("click", addItem);

function addItem() {
	if (input.value !== "") {
		const itemList = document.querySelector("ul");
		const item = document.createElement("li");
		itemList.appendChild(item);
		item.innerText = input.value;
		input.value = "";
	} else {
		alert("Empty field! Please enter an item.");
	}
}

class TaskManager {
	constructor() {
		this.tasks = [];
		this.taskList = document.getElementById("task-list");
		this.taskForm = document.getElementById("task-form");
		this.taskInput = document.getElementById("task-input");

		this.addEventListeners();
	}

	addEventListeners() {
		this.taskForm.addEventListener("submit", (event) => {
			event.preventDefault();
			const taskText = this.taskInput.value.trim();
			if (taskText) {
				this.addTask(taskText);
				this.taskInput.value = "";
			}
		});
	}

	addTask(taskText) {
		const task = {
			id: Date.now(),
			text: taskText,
			isDone: false,
		};
		this.tasks.push(task);
		this.renderTasks();
	}

	renderTasks() {
		this.taskList.innerHTML = "";
		this.tasks.forEach((task) => {
			const li = document.createElement("li");
			li.className = `task ${task.isDone ? "done" : ""}`;
			li.innerHTML = `
        <span>${task.text}</span>
      `;
			this.taskList.appendChild(li);
		});
	}
}

const taskManager = new TaskManager();
