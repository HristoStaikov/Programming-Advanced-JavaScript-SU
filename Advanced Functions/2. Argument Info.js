function solve(...input) {
   function typeValue(array) {
     let newArr = [];
 
     array.forEach((element) => {
       let type = typeof element;
       let value = element;
       newArr.push(type, value);
     });
 
     return newArr;
   }
 
   const arrayNew = typeValue(input);
 
   let obj = new Map();
 
   for (let index = 0; index < arrayNew.length; index += 2) {
     const type = arrayNew[index];
     const value = arrayNew[index + 1];
     console.log(`${type}: ${value}`);
 
     if (obj.has(type)) {
       obj.get(type).push(value);
     } else {
       obj.set(type, [value]);
     }
   }
   let newArr = [];
   for (const el of obj) {
     newArr.push([el[0], el[1].length]);
   }
 
   let sorted = newArr.sort((a, b) => b[1] - a[1]);
   for (const el of sorted) {
     console.log(`${el[0]} = ${el[1]}`);
   }
 }
 solve('cat', 42, function () { console.log('Hello world!'); })