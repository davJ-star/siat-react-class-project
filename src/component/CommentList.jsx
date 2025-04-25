import React from "react" ;
import Comment from "./Comment" ;

const comments = [
    { name : "임정섭" , comment : "강사 임정섭입니다."},
    { name : "박신형" , comment : "학생 박신형입니다."},
    { name : "최여명" , comment : "졸립다~~."}
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />        
                    );
                })
            }
        </div>
    );
}

export default CommentList ;