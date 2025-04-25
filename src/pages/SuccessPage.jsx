import React , {useEffect , useState} from "react" ;
import api from "../api/axios" ;
import TodoItem from "../items/TodoItem";

function SuccessPage(props) {
    const [lst, setLst] = useState([]);

    useEffect(() => {
        console.log("debug >>>> useEffect >>>>>>>>>>>>>>>> ");
        getList();
    }, []);
    const getList = async ()  => {
        console.log("debug >>>> getList endpoint : / react / list");
        const response = await api.get("react/list") ;
        console.log("response        : " , response); 
        console.log(`response status : ${response.status}`);
        console.log(`response data     ` , response.data); 
        setLst(response.data) ; 

    };

    const deleteHandler = async (seq) => {
        console.log("debug >>>>>>>>>>> deleteHandler seq : " , seq);
        // const response = await api.delete(`react/delete/${seq}`); 
        const response = await api.delete("react/delete", { params : { "seq" : seq} }); 
        if(response.status === 204) {
            console.log("debug >>>>>>> delete ok");
            // getList();
            setLst(...[lst.filter(todo=>todo.seq !== seq)] )
        }
    }

    return (
        <div align="center">
            OOO 로그인 성공하셨습니다....
            <table class="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>status</th>
                        <th>priority</th>
                        <th>discard</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lst.map((todo) => {
                            return (
                                <TodoItem   key={todo.seq} 
                                            data={todo}
                                            handler={deleteHandler} />
                        )})    
                    }
                </tbody>
            </table>    
        </div>
    );
}

export default SuccessPage ;