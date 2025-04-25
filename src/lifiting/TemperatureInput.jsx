import React from 'react';

function TemperatureInput(props) {
    // const { legend, value, onChange } = props;
    const changeHandler = (event) => {
        props.handler(event.target.value);
    }

    return (
        <fieldset>
            <legend>{`온도를 입력해주세요(단위: ${props.scale})`}</legend>
            {/**현재 상태로는 어렵다. state를 토대로 체크할 수 있어야한다. */}
            <input
                // type="text"
                value={props.temperature}
                //onChange={props.cHandler} 
                onChange={changeHandler} 
                // onChange={(e) => onChange(e.target.value)}
            />
        </fieldset>
    );
}

export default TemperatureInput;