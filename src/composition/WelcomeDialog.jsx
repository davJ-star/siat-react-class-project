import React from 'react';
import FancyBorder from './FancyBorder';

// Dialog 컴포넌트는 FancyBorder 컴포넌트를 사용하여 제목과 메시지를 표시합니다.
function Dialog(props) {
    return (
        <FancyBorder color="blue"> {/* props.color로 접근 가능 */}
            {/* props.children으로 접근 가능 -> 하위 내용을 잡아갈 수 있다.*/}
            <h1 className="dialog-title">합성{props.title}</h1>
            <p className="dialog-message">맛점하세요~~{props.message}</p>
        </FancyBorder>
    );
}

// WelcomeDialog 컴포넌트는 Dialog 컴포넌트를 사용하여 환영 메시지를 표시합니다.
const WelcomeDialog = () => {
    return (
        <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
    );
}

export default WelcomeDialog;