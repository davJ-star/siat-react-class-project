import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function Calculator(props) {
    // const { legend, value, onChange } = props;
    const [temperature, setTemperature] = useState(0);
    const cHandler = (temperature) => {
        console.log("debug >>> cHandler: ");
        setTemperature(temperature)
    }
    const fHandler = (temperature) => {
        console.log("debug >>> fHandler: ");
        setTemperature(temperature)
    }

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={temperature}
                cHandler={setTemperature}
                handler={cHandler}
            />
            <TemperatureInput
                scale="f"
                temperature={temperature}
                cHandler={setTemperature}
                handler={fHandler}
            />
        </div>
    );
}

export default Calculator;