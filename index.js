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