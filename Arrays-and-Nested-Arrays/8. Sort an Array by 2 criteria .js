function solve(arr) {
    
const sorted = arr.sort((a,b)=>{

if(a.length !== b.length){
    return a.length - b.length
}
a = a.toLowerCase()
b = b.toLowerCase()
return a.localeCompare(b)
}).join("\n")

console.log(sorted);

}
//solve(['1234', 
// '123',
// '12', 
// '12345',
// '123'])
solve(['Isacc', 
"Css",
"bes",
'Theodor', 
'Jack', 
"Ass",
'Harrison', 
'George'])