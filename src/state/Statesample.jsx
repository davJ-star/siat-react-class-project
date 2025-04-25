import React, { useState, useEffect } from "react" ; 

const CAPACITY = 10 ;



// 사람이 입장하고 퇴장하는데 수용인원에 따른 카운트를 관리하고 싶다면? 
function Statesample(props) {

    const [cnt , setCnt] = useState(0); 
    const [isFull , setIsFull] = useState(false);
    const [isEmpty , setIsEmpty] = useState(false);

    const cntUpHandler = () => {
        console.log("debug >>> cntUpHandler");
        setCnt( (cnt) => cnt + 1 );
    }
    
    const cntDownHandler = () => {
        console.log("debug >>> cntDownHandler");
        setCnt( (cnt) => cnt - 1 )
    }

    useEffect(() => {
        console.log("debug >>>> component update cnt : " , cnt); 
        setIsFull( cnt >= CAPACITY );
        setIsEmpty( cnt <= 0);
    }, [cnt]) ; 
    useEffect(() => {
        console.log(`debug >>>> component update isFull : ${isFull}`); 
    }, [isFull]) ; 
    
    return (
        <div>
            <p>{`입장인원 : ${cnt}`}</p>
            <button onClick={cntUpHandler} disabled={isFull}>입장</button>
            <button onClick={cntDownHandler} disabled={isEmpty}>퇴장</button>
            { isFull && <p style={{color : "red" }}>정원이 가득찼습니다</p>}
        </div>
    );
}

export default Statesample ; 