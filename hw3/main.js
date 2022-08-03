let input = document.querySelector(".todo-app__input");
// todoList[todo] : false => not done, todoList[todo] : true => done
let todoList = new Map();
let todoNum = 0;


// main function
input.addEventListener("keypress", function(event){
	if(event.key === "Enter"){
		let todo = createTodo(input.value)
		appendTodo(todo);
		todoList.set(todo.children[1].innerHTML, false);
		todoNum += 1;
		alertTodoNum();
		alertClearButton();
		input.value = "";
	}
});

function print(){
	for(const [key, value] of todoList){
		console.log(value);
	}
}


function alertTodoNum(){
	let counter = document.querySelector(".todo-app__total");
	counter.innerHTML = todoNum.toString() + " left";
	
}

function alertClearButton(){
	if(todoList.size-todoNum > 0){
		document.querySelector(".todo-app__clean").children[0].style.display = "block";
	}

	if(todoList.size-todoNum === 0){
		document.querySelector(".todo-app__clean").children[0].style.display = "none";
	}
}


function clearCompletedTodo(){
	let list = document.querySelector(".todo-app__list");
	for(const [key, value] of todoList){
		if(value){
			if(document.getElementById(key) !== null){
				list.removeChild(document.getElementById(key));
			}
			todoList.delete(key); 
		}
	}
	document.querySelector(".todo-app__clean").children[0].style.display = "none";
	if(todoList.size === 0){
		removeElementByClassName(".todo-app__list");
		removeElementByClassName(".todo-app__footer");
	}
}

function flush(){
	let todos = document.querySelector(".todo-app__list").children;
	while(todos.length > 0){
		todos[0].remove();
	}
}

function showAllTodo(){
	flush();
	for(const [key, value] of todoList){
		let todo = createTodo(key);
		if(value){
			doTodo(todo);
		}
		appendTodo(todo);
	}
}

function showActiveTodo(){
	flush();
	for(const [key, value] of todoList){
		if(!value){
			let todo = createTodo(key);
			console.log(todo);
			appendTodo(todo);
		}
	}
}

function showCompletedTodo(){
	flush();

	for(const [key, value] of todoList){
		if(value){
			let todo = createTodo(key);
			doTodo(todo);
			appendTodo(todo);
		}
	}
}



function toggle(evt){
	let todo = evt.currentTarget.parentElement;
	// console.log(todoList[todo.children[1].innerHTML]);
	if(todoNotDone(todo)){
		doTodo(todo);
		todoList.set(todo.children[1].innerHTML, true);
		todoNum -= 1;
	}
	else{
		undoTodo(todo);
		todoList.set(todo.children[1].innerHTML, false);
		todoNum += 1;
	}
	alertTodoNum();
	alertClearButton();
}

function removeTodo(evt){
	let todo = evt.currentTarget.parentElement;
	let list = todo.parentElement;
	if(todoNotDone(todo)){
		todoNum -= 1;
	}
	todoList.delete(todo.children[1].innerHTML);
	alertTodoNum();
	alertClearButton();
	list.removeChild(todo);
	if(todoList.size === 0){
		removeElementByClassName(".todo-app__list");
		removeElementByClassName(".todo-app__footer");
	}
}

function appendTodo(todo){
	if(todoList.size === 0){
		let main = document.querySelector(".todo-app__main");
		let root = document.querySelector(".todo-app__root");
		let list = createList();
		let footer = createFooter();
		main.appendChild(list);
		root.appendChild(footer);
		list.appendChild(todo);
	}
	else{
		let list = document.querySelector(".todo-app__list");
		list.appendChild(todo);
	}
}


// supplementary function
function doTodo(todo){
	let checkBox = todo.children[0];
	let todoDetail = todo.children[1];
	checkBox.style.background = "LawnGreen";
	todoDetail.style.textDecoration = "line-through";
	todoDetail.style.opacity = "0.5";
}

function undoTodo(todo){
	let checkBox = todo.children[0];
	let todoDetail = todo.children[1];
	checkBox.style.background = "#ddd";
	todoDetail.style.textDecoration = "";
	todoDetail.style.opacity = "";
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
	checkBoxInput.id = "2";
	checkBoxInput.type = "checkbox";
	checkBoxLabel.for = "2";
	itemDetail.className = "todo-app__item-detail";
	itemDetail.innerHTML = todo;
	itemX.className = "todo-app__item-x";
	itemX.src = "./img/x.png";
	itemX.addEventListener("click", removeTodo);
	checkBox.appendChild(checkBoxInput);
	checkBox.appendChild(checkBoxLabel);
	listItem.appendChild(checkBox);
	listItem.appendChild(itemDetail);
	listItem.appendChild(itemX);
	listItem.id = todo;
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
	let all = document.createElement("button");
	let active = document.createElement("button");
	let completed = document.createElement("button");
	let clearBtn = document.createElement("button");
	footer.className = "todo-app__footer";
	footer.id = "todo-footer";
	total.className = "todo-app__total";
	viewButton.className = "todo-app__view-buttons";
	clean.className = "todo-app__clean";
	all.innerHTML = "All";
	all.className = "todo-app__buttons";
	all.addEventListener("click", showAllTodo);
	active.innerHTML = "Active";
	active.className = "todo-app__buttons";
	active.addEventListener("click", showActiveTodo);
	completed.innerHTML = "Completed";
	completed.className = "todo-app__buttons";
	completed.addEventListener("click", showCompletedTodo);
	clearBtn.addEventListener("click", ()=>{
		clearCompletedTodo();
	});
	clearBtn.style.display = "none";
	clearBtn.innerHTML = "Clear completed";

	footer.appendChild(total);
	footer.appendChild(viewButton);
	footer.appendChild(clean);
	viewButton.appendChild(all);
	viewButton.appendChild(active);
	viewButton.appendChild(completed);
	clean.appendChild(clearBtn);

	return footer;
}

function todoNotDone(todo){
	if(todoList.get(todo.children[1].innerHTML) === false) return true;
	else return false;
}

function removeElementByClassName(className){
	let element = document.querySelector(className);
	element.parentElement.removeChild(element);
}

