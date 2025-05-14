import { createElement } from "react";

function App() {
  function appFunction(val) {
    console.log("value from app fun", val);
  }
  console.log(MyApp());
  console.log(<MyApp />);
  return (
    <>
      <Search log={appFunction} num1={90} num2={90} />
      <DynmaicTag tag={"h1"} text={"Hello React Bhai"} />
    </>
  );
}

// function Search({ log, num1 = 10, num2 = 90 }) {
//   console.log("Search function param", log);
//   function logOnConsole(e) {
//     log(e.target.value);
//   }
//   return (
//     <>
//       <h1>{num1 + num2}</h1>
//       <input type="text" name="someinput" id="name" onInput={logOnConsole} />
//     </>
//   );
// }

function Search(abc = {}) {
  // console.log(arguments);
  // console.log("Search function param", abc);
  function logOnConsole(e) {
    abc.log(e.target.value);
  }
  return (
    <>
      <h1>{abc.num1 + abc.num2}</h1>
      <input type="text" name="someinput" id="name" onInput={logOnConsole} />
    </>
  );
}

function MyApp(props = { num: 10 }) {
  return <div> {props.num}</div>;
}

function DynmaicTag({ tag = "p", text = "Default text" }) {
  return createElement(tag, {}, text);
}

export default App;
