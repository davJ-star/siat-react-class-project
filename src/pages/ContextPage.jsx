import React, { createContext, useContext, useState } from 'react';

import ContextHeaderPage from '../context/ContextHeaderPage';
import ContextBodyPage from '../context/ContextBodyPage';
import ContextFooterPage from '../context/ContextFooterPage';

const ContextPage = (props) => {
    return (
        <div>
            <ContextHeaderPage isMode={props.isMode} />
            <ContextBodyPage isMode={props.isMode} />
            <ContextFooterPage isMode={props.isMode} setIsMode={props.setIsMode} />
        </div>
    );
};
export default ContextPage;

// // Create a Context
// const MyContext = createContext();

// // Create a Provider Component
// const MyProvider = ({ children }) => {
//     const [state, setState] = useState("default value");

//     const updateState = (newValue) => {
//         setState(newValue);
//     };

//     return (
//         <MyContext.Provider value={{ state, updateState }}>
//             {children}
//         </MyContext.Provider>
//     );
// };

// // Create a Component to consume the Context
// const ContextConsumer = () => {
//     const { state, updateState } = useContext(MyContext);

//     return (
//         <div>
//             <h1>Current State: {state}</h1>
//             <button onClick={() => updateState("new value")}>Update State</button>
//         </div>
//     );
// };

// const ContextPage = (props) => {
//     return (
//         <div>
//             <ContextHeaderPage isMode={props.isMode} />
//             <ContextBodyPage isMode={props.isMode} />
//             <ContextFooterPage isMode={props.isMode} setIsMode={props.setIsMode} />
//         </div>
//     );
// };
// // const ContextPage = () => {
// //     return (
// //         <MyProvider>
// //             <ContextConsumer />
// //         </MyProvider>
// //     );
// // };

// export default ContextPage;