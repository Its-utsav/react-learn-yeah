const f = {
    _fruit: "Apple",
    set fruit(newFruit) {
        console.log("fruit value changed", newFruit)
        this._fruit = newFruit;
    },
    get fruit() {
        return this._fruit;
    }
}


console.log(f)
f.fruit = "Mango"
console.log(f)