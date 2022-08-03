import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import React, {useState} from "react";

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "(", ")", "="],
];

export default function App(){
    let btns = btnValues.flat().map((btn, i) => {
        return(
            <Button key={i} className={btn === "=" ? "equals" : ""} btn={btn} addOp={addOp}/>
        );
    })

    let [arithmetic, setArithmetic] = useState("");
    let operatorSet = ["+", "-", "X", "%", "/", "=", "."];

    
    function addOp(evt){
        let op = evt.currentTarget.innerHTML.toString();
        if("0" <= op && op <= "9"){
            // console.log("in num");
            setArithmetic(arithmetic + op);
        }
        else if(operatorSet.includes(op)){
            console.log("in op");
            if(arithmetic.length === 0) return;
            else if(operatorSet.includes(arithmetic[arithmetic.length-1])){
                setArithmetic(arithmetic.substring(0, arithmetic.length-1) + op);
            }
            else{
                setArithmetic(arithmetic + op);
            }
        }
        else if(op === "C"){
            setArithmetic("");
        }
    }


    return(
        <Wrapper>
            <Screen arithmetic={arithmetic}/>
            <ButtonBox>
                {btns}
            </ButtonBox>
        </Wrapper>
    )
}