import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
 
    function increase() {
        setNumber(number + 1);
    }
 
    function decrease() {
        setNumber(number - 1);
    }
 
    return (
        <div className="counter">
            <button className="btn-floating btn waves-effect waves-light" onClick={increase}>+</button>
            <span className="number"> {number} </span>
            <button className="btn-floating btn waves-effect waves-light" onClick={decrease}>-</button>
        </div>
    )
}
 
export default Counter;