import axios from "axios" ;

const api = axios.create({
    baseURL : 'http://localhost:8088/',
    withCredentials : true,
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    },
});



// 요청 인터셉터 설정
api.interceptors.request.use(
    // (config) => {}, (error) => {}를 토대로 체크
    (config) => {
        // 요청이 있을 때마다 토큰을 헤더에 추가합니다.
        const accessToken = localStorage.getItem('accessToken');
        console.log('accessToken:', accessToken);

        // accessToken이 존재하면 Authorization 헤더에 추가합니다.
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    // (error) => {
    //     return Promise.reject(error);
    // }
);




// api.interceptors.request.use(
//     (config) => {
//         // 요청이 있을 때마다 토큰을 헤더에 추가합니다.
//         const accessToken = localStorage.getItem('accessToken');
//         if (accessToken) {
//             config.headers['Authorization'] = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// accessToken이 만료되었을 때, refreshToken을 사용하여 새로운 accessToken을 발급받는 로직을 추가합니다.
// 응답 인터셉터 설정
api.interceptors.response.use(
    // (response) => {}, (error) => {}를 토대로 체크

    // 백엔드 서버에서 응답이 성공적으로 돌아왔을 때
    (response) => {
        return response;
    },
    // 백엔드 서버에서 응답이 실패했을 때 -> refresh token을 사용.(localstorage에서 가져올 수 있도록 한다.)
    async (error) => {
        const originalRequest = error.config;
       // if (error.response.status === 401 && !originalRequest._retry) {
        if (true && !originalRequest._retry) {
            
            originalRequest._retry = true; // true일때 1번만 실행되록 설정
            // accessToken이 만료되었을 때, refreshToken을 사용하여 새로운 accessToken을 발급받습니다.
            // refreshToken을 사용하여 새로운 accessToken을 발급받는 API 호출을 추가합니다.
            const refreshToken = localStorage.getItem('refreshToken');
            console.log('refreshToken:', refreshToken);

            // [혹시 모를 사태에 대해 대비] refreshToken이 존재하면 API 호출을 시도합니다.
            if (refreshToken) {
                try {
                    // refreshToken을 사용하여 새로운 accessToken을 발급받는 API 호출
                    const response = await api.post('/auth/renew', { refreshToken });
                    console.log('response:', response.data);
                    
                    const newAccessToken = response.data.accessToken; // const newAccessToken = response.headers.get('Authorization');
                    console.log('newAccessToken:', newAccessToken);

                    localStorage.setItem('accessToken', newAccessToken);
                    // 새로운 accessToken을 요청 헤더에 추가합니다.
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; // originalRequest.headers['Authorization'] = newAccessToken;
                    // 원래 요청을 다시 시도합니다.
                    console.log('originalRequest:', originalRequest);
                    return api(originalRequest);
                } catch (err) {
                    console.error('Error refreshing token:', err);
                }
            }
        }
        return Promise.reject(error);
    }
);


export default api ;