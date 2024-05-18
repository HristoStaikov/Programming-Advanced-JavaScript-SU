let solve = (function () {
    let sum = 0;
 
    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();
 
console.log(solve(1)(6)(-3).toString());

///-----------------bot 

// function adder(initialSum = 0) {
//     let sum = initialSum;

//     function add(value) {
//         sum += value;
//         return add; // Return the function itself for chaining
//     }

//     add.toString = function () {
//         return sum;
//     };

//     return add;
// }

// // Usage
// const result = adder(5)(3)(8); // Chain calls to add
// console.log(result); // Output: 16
