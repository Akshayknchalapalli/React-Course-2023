import React from "react";
import ReactDOM from "react-dom/client";

const isMorning = true;
const morningText = "good morning user";
const afternoonText = "afternoon user";

const handleClick = (state) => {
  console.log("I was clicked", state);
};

const morningElement = (
  <div>
    {morningText}
    <span onClick={() => handleClick(isMorning)}>it is 8am</span>
  </div>
);
const afternoonElement = (
  <div>
    {afternoonText} <span>it is 6pm</span>
  </div>
);
const greetingElement = isMorning ? morningElement : afternoonElement;

const GreetingComponent = () => (
  <>
    {greetingElement}
    I'm inside component
  </>
);
console.log(GreetingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GreetingComponent />);
