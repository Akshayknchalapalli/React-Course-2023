import React from "react";
import ReactDOM from "react-dom";

const child1 = React.createElement("p", {}, "I'm a child 1");
const child2 = React.createElement("p", {}, "I'm a child 2");

const div = React.createElement("div", { className: "text" }, [child1, child2]);
// const div = <div className="text">Hello 2</div>;
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);