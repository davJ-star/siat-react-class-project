import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './lifiting/Calculator';
import WelcomeDialog from './composition/WelcomeDialog';
import ContextApp from './context/ContextApp';
import Login from './token/Login';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import Library from './test/Library';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// import Clock from './test/Clock';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

// import UserList from './test/UserList';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UserList />
//   </React.StrictMode>
// );

// import AvatarList from './test/AvatarList';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AvatarList />
//   </React.StrictMode>
// );

// import Interlocking from './test/Interlocking';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Interlocking />
//   </React.StrictMode>
// );

// import CommentList from './component/CommentList';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <CommentList />
// );

// import Counter from './state/Counter';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Counter />
// );

// import Statesample from './state/Statesample';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Statesample />
// );

// import EventSample from './event/EventSample';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <EventSample />
// );

// import LoginForm from './event/LoginForm';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <LoginForm />
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
//     // <Calculator />
//     // <WelcomeDialog />
//     // <ContextApp />
//     // <Login />
// );

import ForcastPage from './openapi/ForcastPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ForcastPage />
);

// import LogInOutCtrl from './rending/LogInOutCtrl';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <LogInOutCtrl />
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
