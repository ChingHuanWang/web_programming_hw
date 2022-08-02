

import React from 'react';
import Todo from './Todo';

export default function TodoList(props){
	// props have 
	// 1.todoList in App.js, 
	// 2.which state need to show : all, active, completed
	// use map to set item to react component
	// console.log(props.todoList);
	// print();
	
	let todoToShow = [];
	if(props.itemToShow === "All"){
		todoToShow = props.todoList.map((e) => e);
	}
	else if(props.itemToShow === "Active"){
		todoToShow = props.todoList.filter((e) => e.done === false)
	}
	else{
		todoToShow = props.todoList.filter((e) => e.done === true);
	}
	// for(var i = 0 ; i < todoToShow.length ; i++){
	// 	console.log(todoToShow[i].done, todoToShow[i].itemName);
	// }

	todoToShow = todoToShow.map((e, idx) => mapToReactComponent(e.done, e.itemName, idx));

	function mapToReactComponent(done, name, idx){
		if(done){
			return <Todo id={idx} itemName={name} color={"#7FFF00"} className={"todo-app__completed-item-detail"} handleCheckBox={props.handleCheckBox} handleRemoveTodo={props.handleRemoveTodo} />
		}
		else{
			return <Todo id={idx} itemName={name} color={"#ddd"} className={"todo-app__active-item-detail"} handleCheckBox={props.handleCheckBox} handleRemoveTodo={props.handleRemoveTodo} />
		}
	}

	return(
		<>
			<ul className="todo-app__list" id="todo-list">
				{todoToShow}
			</ul>
		</>
	);
}	