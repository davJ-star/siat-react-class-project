import React from "react" ;
import { Link, useLocation } from "react-router-dom";

function TodoView(props) {
    const location = useLocation();
    return (
        <div>
            <Link to="/">랜딩페이지</Link>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{location.state.title}</li>
                <li class="list-group-item">{location.state.content}</li>
                <li class="list-group-item">{location.state.status}</li>
                <li class="list-group-item">{location.state.priority}</li>
            </ul>    
        </div>
        
    );
}

export default TodoView ;