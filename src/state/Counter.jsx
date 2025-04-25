import React, {useState, useEffect} from "react" ;


// 버튼의 이벤트를 감지해서 호출되는 함수 

function Counter(props) {
    // life cycle
    // mount, unmount 
    // useEffect( 함수 , ["cnt"] ) ;
    // 의존성 배열을 생략하면 컴포넌트가 업데이트될 때마다 호출 
    // 컴포넌트가 마운트 된 이후,
    // 빈 의존성 배열을 넣어주게되면 mount, unmount,
    useEffect(() => {
        console.log("debug >>>> component mount ");
        console.log("debug >>>> component update cnt : " , cnt); 
    });
    // data state
    const [cnt, setCnt] = useState(0);    
    return (
        <div>
            <p>사용자 클릭횟수 : {cnt} </p>
            <button onClick={() => { 
                setCnt(cnt + 1) 
            }}>상태관리</button>
        </div>
    );
}

export default Counter ;