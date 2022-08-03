import { Textfit } from "react-textfit";
import {useState} from "react";
import "./Screen.css";

export default function Screen(props){
	let value = 0;
	if(props.arithmetic[props.arithmetic.length-1] === "="){
		value = infixToPostfix(props.arithmetic);
	}

    

    function peepOpBiggerOrEqual(peepOp, op){
        if(peepOp === "(") return false;
        else if(peepOp === "X" || peepOp === "/" || peepOp === "%"){
            return true;
        }
        else{
            if(op === "+" || op === "-"){
                return true;
            }
            else return false;
        }
        return true;
    }

    function restOpTransmit(infix, postfix){
    	console.log(infix);
    	console.log(postfix);
        while(infix.length > 0){
            postfix.push(infix.pop());
        }
        console.log(postfix);
    }

    function isNumber(n){
        return typeof n === "number" && isFinite(n);
    }

    function cal(num1, num2, op){
        if(op === "+") return num2+num1;
        else if(op === "-") return num2-num1;
        else if(op === "X") return num2*num1;
        else if(op === "/") return num2/num1;
        else if(op === "%") return num2%num1;
    }

    function getResult(postfix){
        let result = [];
        let num1 = 0, num2 = 0, num3 = 0;
        
        for(var i = 0; i < postfix.length; i++){
          
            if(isNumber(postfix[i])){
                result.push(postfix[i]);
            }
            else{
                num1 = result.pop();
                num2 = result.pop();
                num3 = cal(num1, num2, postfix[i]);
                result.push(num3)
            }
        }
        // console.log(result[0]);
        return result.pop();
    }

    function infixToPostfix(arithmetic){
        let infix = [];
        let postfix = [];
        for(var i = 0 ; i < arithmetic.length ; i++){
            if(arithmetic[i] === "="){
                
                restOpTransmit(infix, postfix);
                console.log(postfix);
                let result = getResult(postfix);               
                return result;
            }
            else if("0" <= arithmetic[i] && arithmetic[i] <= "9"){
                
                let sum = "";
                while(("0" <= arithmetic[i] && arithmetic[i] <= "9") || arithmetic[i] === "."){
                    sum += arithmetic[i];
                    i += 1;
                }
              
                postfix.push(parseFloat(sum));
                i -= 1;
            }
            else{
                if(arithmetic[i] === "("){
                    
                    infix.push(arithmetic[i]);
                }
                else if(arithmetic[i] === ")"){
                    while(infix.length > 0 && infix[infix.length-1] !== "("){
                    	postfix.push(infix.pop());
                        
                    }
                    infix.pop();
                    
                }
                else{
                    if(arithmetic[i] === "-"){
                        if(i === 0 || arithmetic[i-1] === "("){
                            let sum = "-";
                            i+=1;
                            while(("0" <= arithmetic[i] && arithmetic[i] <= "9") || arithmetic[i] === "."){
                                sum += arithmetic[i];
                                i+=1;
                            }
                            postfix.push(parseFloat(sum));
                           
                            i-=1;
                        }
                        else{
                            while(infix.length > 0 && peepOpBiggerOrEqual(infix[infix.length-1], arithmetic[i])){
                                postfix.push(infix.pop());
                            }
                            infix.push(arithmetic[i]);
                            
                        }
                    }
                    else{
                        while(infix.length > 0 && peepOpBiggerOrEqual(infix[infix.length-1], arithmetic[i])){
                            postfix.push(infix.pop());
                        }
                        infix.push(arithmetic[i]);
                    }
                }
            }
        }
    }

	return (
		<Textfit className="screen" mode="single" max={70}>
			{props.arithmetic[props.arithmetic.length-1] === "=" ? value : props.arithmetic}
		</Textfit>
	)
}