import { useState } from "react";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));

        props.updateCounterSize(parseInt(event.target.value))
    }

    return (
        <div>
            <div className="col s12 ">
                <b className="size" >Size:</b>
                <div className="input-field inline number">
                    <input className="input" type="number" min="0" value={size} onChange={handleChangeSize}></input>
                </div>
            </div>
        </div>
    );
}

export default CounterSizeGenerator;