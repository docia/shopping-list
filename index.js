
const btnClick = document.querySelector("button");
const input = document.querySelector("input");
const itemList = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", loadItems);

btnClick.addEventListener("click", addItem);

function addItem() {
	const itemText = input.value.trim();
	if (itemText !== "") {
		addItemToDOM(itemText); 
		saveItemToLocalStorage(itemText);
		input.value = "";
	} else {
		alert("Empty field! Please enter an item.");
	}
}

function addItemToDOM(itemText) {
	const item = document.createElement("li");
	item.innerHTML = `
        ${itemText}
        <button class="delete">X</button>
      `;
	itemList.appendChild(item);

	item.querySelector(".delete").addEventListener("click", () => {
		deleteItem(itemText, item);
	});
}

function saveItemToLocalStorage(itemText) {
	let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
	items.push(itemText);
	localStorage.setItem("shoppingList", JSON.stringify(items));
}

function loadItems() {
	const items = JSON.parse(localStorage.getItem("shoppingList")) || [];
	items.forEach((itemText) => {
		addItemToDOM(itemText); 
	});
}

function deleteItem(itemText, itemElement) {
	let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
	items = items.filter((item) => item !== itemText);
	localStorage.setItem("shoppingList", JSON.stringify(items)); 
	itemElement.remove();
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
