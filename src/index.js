import React from 'react';
import ReactDOM from 'react-dom';

//react component
const App = () => {
    const buttonText = "Click Me!";

    return(
        <div>
            <label className = "label" for="firstname">
            Enter first name
            </label>
            <input type="text" name="firstname" />
            <label className= "label" for="lastname">
            Enter last name
            </label>
            <input type="text" name="lastname" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
            { buttonText}
            </button>  
        </div>
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')  
);