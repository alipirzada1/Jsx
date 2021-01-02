// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line
function getButtonText() {
  return "Click On Me!!!";
}

// create a React component
const App = () => {
  const buttonText = { text: "Click Me!" };

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter Name:{" "}
      </label>
      <input id="name" type="text" />
      <button
        style={{ backgroundColor: "blue", color: "white", borderRadius: "3px" }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
