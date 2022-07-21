let input = document.querySelector(".todo-app__input");
let todoList = []

input.addEventListener("keypress", function(event){
	if(event.key === "Enter"){
		appendTodo(input.value);
		input.value = "";
	}
});

function todoNotDone(input){
	if(input.id === "1") return true;
	else return false;
}


function toggle(evt){
	let checkBox = evt.currentTarget;
	let itemDetail = checkBox.parentElement.children[1];
	if(todoNotDone(checkBox.children[0])){
		console.log("in if");
		checkBox.style.background = "LawnGreen";
		itemDetail.style.textDecoration = "line-through";
		itemDetail.style.opacity = "0.5";
		checkBox.children[0].id = "2";
		checkBox.children[1].for = "2";
	}
	else{
		console.log("in else");
		checkBox.style.background = "#ddd";
		itemDetail.style.textDecoration = "";
		itemDetail.style.opacity = "";
		checkBox.children[0].id = "1";
		checkBox.children[1].for = "1";
	}
}

function createTodo(todo){
	let listItem = document.createElement("li");
	let checkBox = document.createElement("div");
	let checkBoxInput = document.createElement("input");
	let checkBoxLabel = document.createElement("label");
	let itemDetail = document.createElement("h1");
	let itemX = document.createElement("img");
	listItem.className = "todo-app__item";
	checkBox.className = "todo-app__checkbox";
	checkBox.addEventListener("click", toggle);
	checkBoxInput.id = "1";
	checkBoxInput.type = "checkbox";
	checkBoxLabel.for = "1";
	itemDetail.className = "todo-app__item-detail";
	itemDetail.innerHTML = todo;
	itemX.className = "todo-app__item-x";
	itemX.src = "./img/x.png";
	checkBox.appendChild(checkBoxInput);
	checkBox.appendChild(checkBoxLabel);
	listItem.appendChild(checkBox);
	listItem.appendChild(itemDetail);
	listItem.appendChild(itemX);
	return listItem;
}

function createList(){
	let list = document.createElement("ul");
	list.id = "todo-list";
	list.className = "todo-app__list";
	return list;
}

function createFooter(){
	let footer = document.createElement("footer");
	let total = document.createElement("div");
	let viewButton = document.createElement("ul");
	let clean = document.createElement("div");
	footer.className = "todo-app__footer";
	footer.id = "todo-footer";
	total.className = "todo-app__total";
	viewButton.className = "todo-app__view-buttons";
	clean.className = "todo-app__clean";

	footer.appendChild(total);
	footer.appendChild(viewButton);
	footer.appendChild(clean);

	return footer;
}

function appendTodo(todo){
	listItem = createTodo(todo);
	if(todoList.length === 0){
		let main = document.querySelector(".todo-app__main");
		let root = document.querySelector(".todo-app__root");
		let list = createList();
		let footer = createFooter();
		main.appendChild(list);
		root.appendChild(footer);
		list.appendChild(listItem);
	}
	else{
		let list = document.querySelector(".todo-app__list");
		list.appendChild(listItem);
	}
	todoList.push(todo);
}