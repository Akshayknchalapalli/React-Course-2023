const child1 = React.createElement("p", {}, "I'm a child 1");
const child2 = React.createElement("p", {}, "I'm a child 2");

const div = React.createElement("div", { className: "text" }, [child1, child2]);
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
