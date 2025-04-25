import React from "react" ;
import { replace, useNavigate } from "react-router-dom";
import api from "../api/axios" ;

function TodoItem(props) {
    const moveUrl = useNavigate();
    const readHandler = async (seq) => {
        console.log("debug >>> readHandler seq : ", seq); 
        await api
                .get(`react/view/${seq}`)
                .then( (response) => {
                    console.log("debug >>> resonse data : " , response.data);
                    moveUrl("/todo/read" , 
                            {state : response.data , replace : true} );
                })
                .catch( (err) => {
                    console.log(err); 
                }) ;
        
    }
    

    return (
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.status}</td>
            <td>{props.data.priority}</td>
            <td>
                <button class="btn btn-primary" onClick={() => props.handler(props.data.seq)}>
                    삭제
                </button>
                <button class="btn btn-danger" onClick={ () => readHandler(props.data.seq)}>
                    보기
                </button>
            </td>
        </tr>
    );
}

export default TodoItem ;