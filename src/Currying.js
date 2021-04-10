function add(a, b) {
    return a + b;
}

function addCurry(a) {
    return function (b) {
        return a + b;
    };
}

addCurry(1)(5); // add(1, 5)

// Arrow function
const add2 = (a) => (b) => a + b;
