import React from 'react';
import FancyBorder from './FancyBorder';

// Dialog 컴포넌트는 FancyBorder 컴포넌트를 사용하여 제목과 메시지를 표시합니다.
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">{props.title}</h1>
            <p className="dialog-message">{props.message}</p>
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