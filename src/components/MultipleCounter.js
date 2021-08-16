import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultipleCounter() {
    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);
    }

    return (
        <div className="container center-align ">
            <div class="card-panel center hoverable ">
                <CounterSizeGenerator updateCounterSize={updateCounterSize} />
                <CounterGroup counterSize={counterSize}/>
                <div><h3>Counter Size: {counterSize}</h3></div>     
            </div>
        </div>
    )
}

export default MultipleCounter;