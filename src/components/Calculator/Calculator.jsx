import { useState, useRef } from "react";
import s from "./Calculator.module.css";
import { sum, substract, multiply, divide } from "../../utils/math-functions.js";

export function Calculator(){
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [operator,setOperator] = useState("sum");
    //const [result,setResult] = useState("");
    const result = calculate(a, b, operator);

    function calculate(a,b,operator) {
        switch(operator) {
            case "sum":
                return (sum(a,b));
            case "substract":
                return (substract(a,b));
            case "multiply":
                return (multiply(a,b));
            case "divide":
                return (divideSafely(a,b));                                           
            default:
                return "No operator or invalid";      
        }
    }


    function handleOnChangeOperator(e) {
        const value = e.target.value;
        setOperator(value);
        //setResult(calculate(a,b,value));

    }

    function handleOnChangeA(e) {
        const value = Number(e.target.value);
        setA(value);
        //setResult(calculate(value, b, operator));
    }

    function handleOnChangeB(e) {
        const value = Number(e.target.value);
        setB(Number(value));
        //setResult(calculate(a,value,operator));
    }

    function divideSafely(a,b) {
        try{
            return divide(a,b);
        } catch(error){
            return error.message;
        }
    }

    return <div className="">
        <h1>Calculator</h1>
        <div className={s.container}>
            <input type="number" data-testid="inputA" onChange={handleOnChangeA} />
            <select onChange={handleOnChangeOperator} defaultValue="sum" data-testid="operator">
                <option value="sum">+</option>
                <option value="substract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" onChange={handleOnChangeB} data-testid="inputB" />
            </div>
            <h2>Result</h2>
            <span className="result" data-testid="result">{result===""?"":result}</span>
    </div>;
}