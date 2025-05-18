import Day06 from "./Day06";

const Button = ({ label = "", onClick = () => {} } = {}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "#28e011",
        height: "40px",
        width: "40px",
        padding: "5px",
        margin: "10px",
        outline: "none",
        border: "none",
        borderRadius: "2px",
      }}
    >
      {label}
    </button>
  );
};
const App = () => {
  return <Day06 />;
};

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
//   const handleDecrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <Button label="+" onClick={handleIncrement} />
//       <span>{count}</span>
//       <Button label="-" onClick={handleDecrement} />
//     </div>
//   );
// };

// const Sum = () => {
//   const [n1, setN1] = useState(0); // default value for Input box
//   const [n2, setN2] = useState(0);
//   const [value, setValue] = useState(0);
//   const add = () => {
//     const res = Number(n1) + Number(n2);
//     console.log(res);
//     setValue(res);
//   };
//   const handleN1Chane = (e) => {
//     setN1(e.target.value);
//   };
//   const handleN2Chane = (e) => {
//     setN2(e.target.value);
//   };
//   return (
//     <div>
//       <input
//         type="number"
//         name="num1"
//         id="num1"
//         value={n1} // Binding with state
//         onChange={handleN1Chane}
//         placeholder="Enter Number 1"
//       />
//       +
//       <input
//         type="number"
//         name="num2"
//         id="num2"
//         value={n2}
//         onChange={handleN2Chane}
//         placeholder="Enter Number 2"
//       />
//       <br />
//       <br />
//       <button type="button" onClick={add}>
//         Add
//       </button>
//       <br />
//       <span id="res">{value}</span>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <Sum />
//     </>
//   );
// };

// const Sum = () => {
//   const [value, setValue] = useState(0);
//   const num1 = useRef();
//   const num2 = useRef();
//   console.log("Render");
//   const add = () => {
//     const n1 = Number(num1.current.value);
//     const n2 = Number(num2.current.value);
//     const res = `${n1} + ${n2} = ${n1 + n2}`;
//     setValue(res);
//   };
//   return (
//     <div>
//       <input
//         type="number"
//         name="num1"
//         id="num1"
//         ref={num1}
//         placeholder="Enter Number 1"
//       />
//       +
//       <input
//         type="number"
//         name="num2"
//         id="num2"
//         ref={num2}
//         placeholder="Enter Number 2"
//       />
//       <br />
//       <br />
//       <button type="button" onClick={add}>
//         Add
//       </button>
//       <br />
//       <span id="res">{value}</span>
//     </div>
//   );
// };

// const App = () => {
//   console.log("render");
//   const [value, setValue] = useState({ count: 0 });
//   const add = () => {
//     setValue({ count: 0 });
//   };
//   return (
//     <>
//       <button onClick={add}>Click me</button>
//       {value.count}
//       {/* <Sum /> */}
//     </>
//   );
// };

// function App() {
//   function appFunction(val) {
//     console.log("value from app fun", val);
//   }
//   console.log(MyApp());
//   console.log(<MyApp />);
//   return (
//     <>
//       <Search log={appFunction} num1={90} num2={90} />
//       <DynmaicTag tag={"h1"} text={"Hello React Bhai"} />
//     </>
//   );
// }

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

// function Search(abc = {}) {
//   // console.log(arguments);
//   // console.log("Search function param", abc);
//   function logOnConsole(e) {
//     abc.log(e.target.value);
//   }
//   return (
//     <>
//       <h1>{abc.num1 + abc.num2}</h1>
//       <input type="text" name="someinput" id="name" onInput={logOnConsole} />
//     </>
//   );
// }

// function MyApp(props = { num: 10 }) {
//   return <div> {props.num}</div>;
// }

// function DynmaicTag({ tag = "p", text = "Default text" }) {
//   return createElement(tag, {}, text);
// }

export default App;
