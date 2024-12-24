//task1
// function sayhello(){
//     const value=1
//     return function(){
//         console.log(value)
//     }
// }
// const ab=sayhello()
// ab()

//task2
// function sayhello(){
//     let value=1
//     return{
//         increment(){
//             value++;
//         },
//         currentvalue(){
//             return value;
//         }
//     }
// }
// const ab=sayhello()
// console.log(ab.currentvalue())
// ab.increment()
// console.log(ab.currentvalue())

//task3
// function sayhello(){
//     let value=Math.random();
//     console.log(value)
//     return function(){
//         value++;
//         return value;
//     }
// }
// const ab=sayhello()
// console.log(ab())

//task4
// function sayhello(){
//     const fullname="hello";
//     return function(){
//         return `welcome ${fullname}`;
//     }
// }
// const ab=sayhello()
// console.log(ab())

//task5
// const arr=[];
// for(let i=0; i<5; i++){
//     arr.push((function(i){
//         return function(){
//             return i;
//         }
//     })(i))
// }
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]())
// }

//task6
// function sayhello(){
//     const arr=[1,2,3,4,5];
//     return{
//         add(value){
//             arr.push(value)
//         },
//         remove(){
//             arr.pop()
//         },
//         getarr(){
//             return arr;
//         }
//     }
// }
// const ab=sayhello()
// console.log(ab.getarr())
// ab.add(1);
// console.log(ab.getarr())
// ab.remove()
// console.log(ab.getarr())

//task7
// function memoize(fn){
//     const cache={};
//     return function(val){
//         if(cache[val]){
//             console.log("if")
//             return cache[val];
//         }
//         else{
//             const result=fn(val)
//             cache[val]=result;
//             console.log("else")
//             return result;
//         }
//     }
// }
// const add=(val)=>val+val;
// const ab=memoize(add)
// console.log(ab(2))
// console.log(ab(2))
// console.log(ab(5))

//for multiple parameter
// function memoize(fn){
//     const cache={};
//     return function(...val){
//         const value=JSON.stringify(val);
//         // console.log(value)
//         if(cache[value]){
//             console.log("if")
//             return cache[value];
//         }
//         else{
//             const result=fn(val)
//             cache[value]=result;
//             console.log(cache);
//             console.log("else")
//             return result;
//         }
//     }
// }
// const add=(val)=>val.reduce((a,b)=>a+b,0);
// const ab=memoize(add)
// console.log(ab(1,2,3,4,5))
// console.log(ab(1,2,3,4,5))
// console.log(ab(1,2))

//task8
// function memoize(fn){
//     const cache={};
//     return function(val){
//         if(cache[val]){
//             console.log("if")
//             return cache[val];
//         }
//         else{
//             const result=fn(val)
//             cache[val]=result;
//             console.log("else");
//             return result;
//         }
//     }
// }
// function factorial(value){
//     if(value<=1){
//         return 1;
//     }
//     return value*factorial(value-1)
// }
// const ab=memoize(factorial)
// console.log(ab(5))
// console.log(ab(5))