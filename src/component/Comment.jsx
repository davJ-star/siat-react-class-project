import React from "react" ;

const styles = {
    container : {
        margin : 8,
        padding : 8,
        diplay : "flex",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16
    },
    commentContainer : {
        marginLeft : 8,
        display : "flex",
        flexDirection : "column",
        justifyContent : "center"
    },
    nameTxt : {
        color : "black",
        fontSize : 16,
        fontWeight : "bold"
    },
    commentTxt : {
        color : "red", 
        fontSize : 16
    }
} ;

function Comment(props) {
    return (
        <div style={styles.container}>
            <div>

            </div>
            <div style={styles.commentContainer}>
                <span style={styles.nameTxt}>{props.name}</span>
                <span style={styles.commentTxt}>{props.comment}</span>
            </div>
        </div>
    );    
}

export default Comment ;
