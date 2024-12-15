//task1
// function sayhello(value){
//     if(value%2===0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// sayhello(2)

//task2
// function sayhello(value){
//     return value*value;
//     //or
//     return Math.pow(value,2);
//     //or
//     return value**2;
// }
// console.log(sayhello(2))

//task3
// const sayhello=function(a,b){
//     if(a>=b){
//         console.log("a",a)
//         return;
//     }
//     console.log("b",b);
// }
// sayhello(2,2)

//task4
// const str="hello";
// const newstr="world";
// const sayhello=function(str,newstr){
//     str=str.concat(newstr);
//     return str;
// }
// const result=sayhello(str,newstr)
// console.log(result)

//task5
// const add=(a,b)=>a+b;
// console.log(add(1,2))

//task6
// const str="hello";
// console.log(str.includes("l"));

//task7
// function sayhello(a,b=10){
    // return a*b;
// }
// console.log(sayhello(1))

//task8
// function sayhello(name,age=100){
    // return `${name}-${age}`;
// }
// const name="helloworld";
// const age=1;
// console.log(sayhello(name,age))

//task9
// function sayhello(a,add){
//     for(let i=1; i<=a; i++){
//         add()
//     }
// }
// sayhello(2,()=>{
//     console.log("add is called")
// })

//task10
// function sayhello(add,multiply,value){
//     return multiply(add(value))
// }
// function add(a){
//     return a+a;
// }
// function multiply(a){
//     return a*a;
// }
// console.log(sayhello(add,multiply,2))