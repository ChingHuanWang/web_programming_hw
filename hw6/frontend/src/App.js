import React, { useState } from 'react';
import './App.css';
import {guess, startGame, restart} from "./axios";


export default function App(){
    const [hasStarted, setHasStarted] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [number, setNumber] = useState("");
    const [status, setStatus] = useState("");
    

    const handleGuess = async() => {
        const response = await guess(number);
    
        if(response === "!"){
            setStatus("invalid input!");
            setNumber("");
        }
        else if(response === "="){
            setNumber("");
            setStatus("");
            setHasWon(true);
        }
        else if(response === "<"){
            setNumber("");
            setStatus("Guess bigger number!");
            
        }
        else if(response === ">"){
            setNumber("");
            setStatus("Guess smaller number!");
            
        }
    }

    const handleInput = (e) => {
        let num = e.target.value;
        setNumber(num);
    }


    const startMenu = 
        <div>
            <button onClick={async() => {
                await startGame();
                setHasStarted(true);
            }}>
                start game!
            </button>
        </div>

    const gameMode = 
    <>
        <p>Guess a number between 1 to 100</p>
        <input
            onChange={handleInput}
        ></input>
        <button
            onClick={handleGuess}
            disabled={!number}
        >guess!</button>
        <p>{status}</p>
    </>

    const winningMode = 
    <>
        <p>you won! the number was {number}</p>
        <button
            onClick={async() => {
                await restart();
                setHasWon(false);
            }}
        >restart</button>
    </>

    const game = 
    <div>
        {hasWon ? winningMode : gameMode}
    </div>

    return (
        <div className="App">
            {hasStarted ? game : startMenu}
        </div>
    )
}








