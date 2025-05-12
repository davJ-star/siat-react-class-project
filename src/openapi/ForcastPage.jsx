import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const ForcastPage = (props) => {
    const [base_time, setBase_time] = useState('');
    const [base_date, setBase_date] = useState('');
    const [beach_num, setBeach_num] = useState('');


    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // componentDidMount에서 처리해줄 필요없다.
    const forcastHandler = async (base_time, base_date, beach_num) => {
        console.log(`base_time: ${base_time}, base_date: ${base_date}, beach_num: ${beach_num}`);
        
        // try-catch로도 할수있고, .then으로해서 처리시킬수도 있다.
        /**아래 axios 비동기통신하는 부분 경우 */
        try {
            const response = await api.post('/forcast/getData', {
                base_time,
                base_date,
                beach_num
              });
            console.log(`response: ${response}`);
            console.log(response);
            console.log(response.data);
            setForecastData(response.data);
            
            // List로 반환해준다. 
        } catch (e) {
            console.log(e);
        }

    }


    // useEffect(() => {
    //     // TODO: Replace with your actual API endpoint
    //     fetch('/forcast/getData')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setForecastData(data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Forecast Page</h1>
            {/* <pre>{JSON.stringify(forecastData, null, 2)}</pre> */}
            {forecastData === null ? (
      // 입력 폼: forecastData가 null일 때만 보임
                <>
                    <input
                        type="text"
                        placeholder="예보시간"
                        value={base_time}
                        onChange={(e) => setBase_time(e.target.value)}
                    /><br />
                    <input
                        type="text"
                        placeholder="예보날짜"
                        value={base_date}
                        onChange={(e) => setBase_date(e.target.value)}
                    /><br />
                    <input
                        type="text"
                        placeholder="해변번호"
                        value={beach_num}
                        onChange={(e) => setBeach_num(e.target.value)}
                    /><br />
                    <button onClick={() => forcastHandler(base_time, base_date, beach_num)}>
                        클릭
                    </button><br />
                </>
                ) : (
                // forecastData가 null이 아니면 map으로 결과 출력
                <div>
                    <h2>예보 결과</h2>
                    {/**Array.isArray(forecastData)이 맞는지 체크해봐야한다. */}
                    {Array.isArray(forecastData) && forecastData.length > 0 ? (
                    forecastData.map((item, idx) => (
                        <div key={idx} style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
                        {/* 아래는 예시 필드, 실제 필드명에 맞게 수정 */}
                        <div>해변 번호  : {item.beachNum} 예보 날짜: {item.baseDate} 예보 시간: {item.baseTime}</div>
                        <div> 카테고리  : {item.category}</div>
                        <div>예측 시간  : {item.fcstTime}시</div>
                        <div>예측 값  : {item.fcstValue}</div>
                        <div>nx  : {item.nx} ny  : {item.ny}</div>
                        {/* 필요한 다른 필드도 추가 */}
                        </div>
                    ))
                    ) : (
                    <div>데이터가 없습니다.</div>
                    )}
                    {/* 다시 입력 폼으로 돌아가는 버튼 */}
                    <button onClick={() => setForecastData(null)}>다시 입력</button>
                </div>
                )
            }
        </div>    
    );
};

export default ForcastPage;