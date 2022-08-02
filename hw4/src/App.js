import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Footer from './Footer'
import React, {Component, useRef, useState} from 'react';


export default function App(){
    
    // {taskName: 123, done: false}
    let [todoList, setTodoList] = useState([]);
    let [todoNum, setTodoNum] = useState(0);
    let [itemToShow, setItemToShow] = useState("All");
    

    return (
        <div id="root" className="todo-app__root">
            <header className="todo-app__root">
                <h1 className="todo-app__title">todos</h1>
            </header>
            <section className="todo-app__main">
                <input className="todo-app__input" placeholder="What needs to be done?" onKeyDown={inputTodo}></input>
                {todoList.length > 0 ? <TodoList todoList={todoList} itemToShow={itemToShow} todoNum={todoNum} handleCheckBox={handleCheckBox} handleRemoveTodo={handleRemoveTodo}/> : <></>}
            </section>

            {todoList.length > 0 ? <Footer todoList={todoList} todoNum={todoNum} showAll={showAll} showActive={showActive} showCompleted={showCompleted} handleClearCompleted={handleClearCompleted} /> : <></>}
        </div>
    )
    

    function inputTodo(evt){
        if(evt.key === "Enter"){
            let item = evt.currentTarget.value;
            setTodoList(todoList => [...todoList, {itemName:item, done:false}]);
            setTodoNum(todoNum+1);
            evt.currentTarget.value="";
        }
    }

    function handleCheckBox(evt){
        let itemDetail = evt.currentTarget.parentElement.children[1];
        let checkBox = evt.currentTarget;
        let id = todoList.findIndex(e => e.itemName === itemDetail.innerHTML);
        if(!todoList[id].done){
            let newItem = {itemName:todoList[id].itemName, done:true};
            setTodoList([...todoList.slice(0, id), newItem, ...todoList.slice(id+1, todoList.length)]);
            setTodoNum(todoNum-1);
            itemDetail.className = "todo-app__completed-item-detail";
            checkBox.style.background = "#7FFF00";
        }
        else{
            let newItem = {itemName:todoList[id].itemName, done:false};
            setTodoList([...todoList.slice(0, id), newItem, ...todoList.slice(id+1, todoList.length)]);
            setTodoNum(todoNum+1);
            itemDetail.className = "todo-app__active-item-detail";
            checkBox.style.background = "#ddd";
        }
    }

    function handleRemoveTodo(evt){
        let itemDetail = evt.currentTarget.parentElement.children[1];
        let name = itemDetail.innerHTML;
        let allItem = evt.currentTarget.parentElement.parentElement.children; 
        setTodoList(todoList.filter(e => e.itemName !== name));
        for(var i = 0; i < allItem.length ; i++){
            console.log(allItem[i].children[0].style.background);
            // if(todoList[i].done === false){
            //     console.log("in if");
            //     allItem[i].children[0].style.background = "#ddd";
            // }
            // else{
            //     console.log("in else");
            //     allItem[i].children[0].style.background = "#7FFF00";
            // }
        }
        // for(var i = 0 ; i < todoList.length ; i++){
        //     if(!todoList[id].done){

        //     }
        // }
    }

    function handleClearCompleted(){
        setTodoList(todoList.filter(e => e.done === false));
    }

    function showAll(){
        setItemToShow("All");
    }

    function showActive(){
        setItemToShow("Active");
    }

    function showCompleted(){
        setItemToShow("Completed");
    }

}


