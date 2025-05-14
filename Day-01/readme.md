# React
- [React](#react)
  - [Why React is used ?](#why-react-is-used-)
  - [SPA vs Traditional Page](#spa-vs-traditional-page)
  - [What is React ?](#what-is-react-)
  - [Old Days Of React](#old-days-of-react)
  - [JSX](#jsx)


## Why React is used ?

- it used for reducing the number of DOM operations  
  
- `document.getElementById("SOME_ID")` is more costly operation as compare to the 100k or 1 Mil Loop
- `document.getElementById("SOME_ID")` (It is part of `DOM` API , which is part of Browser) is the browser methods method not a native `JavaScript` method

- Browser were written in `C++` most of, And we code in `JavaScript` , `JavaScript` can not directly communicate with hardware  
- Methods likes `document.getElementById("SOME_ID")` invoke some `C++` methods or code which manipulate the DOM
- Here `JavaScript` give instruction to the `C++` so their always slightly delay  
- Browser were made for displaying only document not for fancy animations , no interactions , documents only contains bunch of links indicating another document   
- Resulting every time reload and more files downloading on client and more server processing 

- At that time (2005 till 2011-12) AJAX were very popular which help us to reduce load on server ,which help us make page some interact , do not require entire page reload  

## SPA vs Traditional Page
- Traditional Page used AJAX for data fetching , reduce page reloads 
- where as SPA -> single page application only update the same page , some tweaks on address bar , and update page content when needed . Majorly no page reload

##  What is React ?

> A JavaScript library for building user interfaces (Classic)

> The library for web and native user interfaces (Modern)


1. Declarative
   1. We have not worry about how react will manipulate the DOM elements
      1. example
        ```html
        <button onClick={}>Click Me :)</button>
        ```
   2. Imperative - We have manually manipulate the DOM elements
      1. example
        ```js
        const btn = document.createElement("button");
        btn.textContent = "Click Me :)";
        btn.onclick = function () {
            console.log("Hello", new Date())
        }
        document.getElementsByTagName("body")[0].append(btn)
        ```
2. Component-Based - Function that return `JSX(HTML)`
   1. Everything in react is a component
   2. Break everything into the smallest unit till it can not be divide
3. Learn Once, Write Anywhere
   1. We can make Mobile( Android , IOS) , Desktop


## Old Days Of React
- A time when next js , vite , CRA , npm were not available then we have to use react via CDN
- React use `JSX` (JavaScript XML) which browser do not understand , so have to use any middle person who translate the react code into browser understandable code (`JS`)
- Here `Babel` came into the picture which translate react code in `JS`
```html
<div id="root"></div>
<script type="text/babel">
  function MyApp() {
    return <h1>Hello Wold 1 !! </h1>;
  }
  const continer = document.getElementById("root");
  const root = ReactDOM.createRoot(continer);
  root.render(<MyApp />);
</script>
```

## JSX
- `JSX` JavaScript XML created by react team , it is just the extension of `JavaScript`
-  It only return **one** HTML element why ? A single function can return only single value, if we want to multiple value than we have to use array or object
-  Attributes are written in camelCase
-  We can't use class attribute we have to used className , due to differentiate class and class attribute
-  We have to close every tag .

```js
function MyApp() {
    return <h1>{10 + 10} </h1>;
}
```
- we have to write evaluating an expression not JavaScript code 
- React process in the expression and replace with output 

- **WRONG CODE**
```js
function MyApp() {
    return <h1>{if(1){console.log("Hello")}else{console.log("World")}} </h1>;
}
```