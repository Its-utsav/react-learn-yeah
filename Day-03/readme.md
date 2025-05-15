# Day 3

- [Day 3](#day-3)
  - [Journey to the NPM](#journey-to-the-npm)
  - [Modules](#modules)
    - [CJS](#cjs)
    - [AMD](#amd)
    - [UMD](#umd)
    - [ESM](#esm)
  - [WebPack - CRA - vite](#webpack---cra---vite)
    - [WebPack](#webpack)
    - [CRA](#cra)
    - [Vite](#vite)

## Journey to the NPM 

- initially days we have only two way to include external files in our `HTML` , by using `link` tag for CSS and `script` tag for `JavaScript` 
- When website grow bigger than handling external Files or Dependency handling is very Hard . Some Dependency may be dependent on another Dependency , which is very hard to maintain
- Even some Dependency require for only in development time which again we have to remove it from production build
- Naming conflicts
- Majority External Files or Dependency Used via CDN (Content Delivery Network) which help us to reduce some latency 
- Here NPM help us to organize the different types of Dependency
- We use NPM via node js

```shell
npm install <Dependency_NAME>
```

- Versioning 
  
1. `^1.2.3` - Allow minor and patch updates `2` or `3` can change
2. `~1.2.3` - Allows update to only for patch version -> only `3` can change
3. `1.2.3` - Only Install Dependency with `1.2.3` version

- `1.2.3` ->
- 1 means major version (My break applications) (Dangerously to update)
- 2 -> means minor version  (Can to update)
- 3 -> means patch version (Can to update)

package.json store following info
1. Project Details -> Name , Author , Project Version etc
2. How to run application
3. How to build application
4. Info of Dependency including Dev Dependency-> name , version , type
5. And Different and lots of type configs


- when we install any package via NPM it also create package-lock.json
- it help us in Dependency version Consistency 
- `npm i` install package from package-lock.json
- It is kind of metadata about our dependency and project

## Modules

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External LINKS</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  <script src="app1.js"></script>
  <script src="app2.js"></script>
  <script src="app3.js"></script>
</html>
```
---
- `app1.js`
```js
var fruit = "APPLE"
```
---
- `app2.js`
```js
var fruit = "MANGO"
```
---
- `app3.js `
```js
console.log(fruit);
```
--- 
output

```js
MANGO
```

- We see here every script runs in Global Scope
- One by one all the Script load in browser and last loading variable get override by previous loaded variable
- that why output is MANGO

- in the case of `let` or `const` variable declaration we get error due to redeclaration of variable and still print `MANGO`
- We can use IIFE but variable can't be use in any other files
```js
(function(){
    var fruit = "Mango";
    console.log(fruit);
})()
```


### CJS
- CommonJS is a module pattern
- Each files is module build by Node JS
- kind of Node JS wrap each file contain inside invisible function (We can't see it) like IIFE with Extra `module` object
- Like this
- **NOTE:- this is just representation not used like mention way**
---

`app1.js` 
```js
(function (module) {
    var fruit = "MANGO";
    module.export = fruit;
})()
```

`app2.js`

```js
var f = require("app1.js");
console.log(f)
```
-----
**Actual CJS code**
- `app1.js`
```js
var fruit = "APPLE";

module.exports = {
    fruit, getData
};

function getData() {
    return {
        name: "Utsav",
        age: 18
    }
}; 
```
- `app2.js`

```js
var f = require("./app1.js");

console.log(f.fruit);
console.log(f.getData());
```

- Drawbacks
1. Synchronous loading  
2. File-based modules
3. Mainly Used In Node js Based project
4. Browser issues 

### AMD

- AMD - `Asynchronous Module Definition`
- it solve CJS browser related issues and Asynchronous loading problem 
- Used In legacy Project 

### UMD
- it is combination of CJS + AMD
- Used In legacy Project

### ESM
- ESM stand for `ECMAScript Modules` is Morden way to organize and share JavaScript code as compare to `CJS` , `AMD` , `UMD`
- Support Browser and Node js Natively without any other dependency (May be use tools for optimization)
- allowed Asynchronous imports
- `app1.js`
```js
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
```
- `app2.js`
```js
import { name, getData } from "./app1.js";
console.log(getData(), name);
```



- NPM solve external package issue
- while modules help in write and share module code


## WebPack - CRA - vite 

### WebPack
- Webpack is A powerful and versatile bundler
- support `HMR` Hot Module Replacement 
- Build entire project into to single file 
- many plugins but when our project grows it performance decrease drastically 

[Learn More](https://rahuulmiishra.medium.com/exploring-four-core-concepts-every-frontend-developer-should-know-b51f6e0e1cd2)

### CRA
- **Deprecated DOT USE IT**
- CRA stand for Create-React-App which is officially supported by react with zero configuration 
- Use Webpack under the hood
- easy for beginners , inbuilt testing but _Limited flexibility and use webpack resulting when our project grows it performance decrease drastically_ 


### Vite
- Vite is a next-generation frontend tooling 
- Use ESM resulting very fast , support HMR
- Extremely fast development server start-up and HMR , simple configurations , more flexible than CRA , use rollup to bundle for production
- Support modern JavaScript and CSS
- _Smaller plugin ecosystem_
- why vite instead of CRA

- in every project node_modules code did not change most , only add or remove code when we install package or delete package 
- So vite build node_modules once initial start of script via esbuild (written in Go lang), and keep track of only code outside of node_modules
- So it build for changes code not for entire code in ESM

- Now days many react project build using the vite , parcel js (Used rust 🦀 BTW)


