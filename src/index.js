import React from 'react';
import ReactDOM from 'react-dom';

//react component
// const App = () => {
//     const buttonText = "Click Me!";

//     return(
//         <div>
//             <label className = "label" htmlFor="firstname">
//             Enter first name
//             </label>
//             <input type="text" name="firstname" />
//             <label className= "label" htmlFor="lastname">
//             Enter last name
//             </label>
//             <input type="text" name="lastname" />
//             <button style={{ backgroundColor: "blue", color: "white" }}>
//             { buttonText}
//             </button>  
//         </div>
//     );
// };

//Get current time
function getTime() {
    return(new Date()).toLocaleTimeString()

}


const App = () => {
    return (
        <div>
            <h1>Current Time:</h1>
            <h3>{ getTime() }</h3>
        </div>
    );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')  
);