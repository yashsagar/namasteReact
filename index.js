// const createElement = document.createElement("h1");
// createElement.textContent = "I am going to rock the word";
// const selectElement = document.getElementById("root");
// selectElement.appendChild(createElement);

const createElement = React.createElement(
  "h1",
  {},
  "I am from React app updated"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createElement);
