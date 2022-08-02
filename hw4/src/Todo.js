import React from 'react';
import x from './img/x.png';

export default function Todo(props){

	return(
		<>
			<li className = {"todo-app__item"}>
				<div className = {"todo-app__checkbox"} style={{background: props.color}} onClick={props.handleCheckBox}>
					<label />
				</div>
				<h1 className = {props.className} >{props.itemName}</h1>
				<img className = {"todo-app__item-x"} src={x} onClick={props.handleRemoveTodo} />
			</li>
		</>
	)
}