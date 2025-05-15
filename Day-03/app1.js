
// console.log("fruit name in app1.js ", fruit)
// var fruit = "APPLE";

// module.exports = {
//     fruit, getData
// };

function getData() {
    return {
        name: "Utsav",
        age: 18
    }
};

// export default getData;
// export const name = "Utsav"
const name = "Utsav"

export {
    getData, name
}