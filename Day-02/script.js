// //  // // // // // // // const root = document.querySelector("#root");
// // // // // // //  root.innerHTML = `<img src='0' onerror="alert('YOU are hacked')">`


function sum(a, b) {
    return a + b;
}
sum(10, 10);

function sum(props) {
    return props.a + props.b; // BAD WAY
}
sum({ a: 10, b: 10 })

function sum({ a, b }) {
    return a + b; // NICE WAY
}
sum({ a: 10, b: 10 })

// --------- OR -----------

function sum(props) { // NICE WAY -> v2
    const { a = 0, b = 0 } = props; // even safe from null values
    return a + b;
}
sum({ a: 10, b: 10 })

// const ans = sum(10, 2);
// let a = console.log("ans " + ans);