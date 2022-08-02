

import React from 'react';

export default function Footer(props){


	// let todoNum = 0;
	// let doneNum = 0;
	// for(var i = 0; i < props.todoList.length; i++){
	// 	if(!props.todoList[i].done){
	// 		todoNum+=1;
	// 	}
	// 	else{
	// 		doneNum+=1;
	// 	}
	// }

	return (
		<>
			<footer className="todo-app__footer" id="todo-footer">
				<div className="todo-app__total">{props.todoNum.toString()+" left"}</div>
				<ul className="todo-app__view-buttons">
					<button className="todo-app__buttons" onClick={props.showAll}>{"All"}</button>
					<button className="todo-app__buttons" onClick={props.showActive}>{"Active"}</button>
					<button className="todo-app__buttons" onClick={props.showCompleted}>{"Completed"}</button>
				</ul>
				<div className="todo-app__clean">
					{props.todoList.length-props.todoNum > 0 ? <button onClick={props.handleClearCompleted}>{"Clear completed"}</button> : <></>}
				</div>
			</footer>
		</>
	)
}