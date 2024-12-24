//task1
// function sayhello(){
//     throw new Error("custom message");
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error);
// }

//task2
// function sayhello(a,b){
//     if(b===0){
//         throw new Error("custom error");
//     }
//     return a/b;
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error)
// }

//task3
// function sayhello(){
//     throw new Error("custom error message");
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log("finally executed");
// }

//task4
// class customerror extends Error{
//     constructor(message){
//         super(message);
//     }
// }
// function sayhello(){
//     throw new customerror("error is throwing")
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error)
// }

//task5
// class customerror extends Error{
//     constructor(message){
//         super(message);
//     }
// }
// function sayhello(str){
//     if(!str){
//         throw new customerror("error is throwing");
//     }
//     return str;
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error);
// }

//task6
// const promise=new Promise((resolve,reject)=>{
//     const value=Math.random();
//     if(value>=0.5){
//         resolve(1)
//     }
//     else{
//         reject("reject throwing")
//     }
// })
// promise
// .then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{
//     console.log(error)
// })

//task7
// const promise=new Promise((resolve,reject)=>{
//     const value=Math.random();
//     if(value>=0.5){
//         resolve(1)
//     }
//     else{
//         reject("reject throwing")
//     }
// })
// async function sayhello(){
//     try{
//         const result=await promise;
//         console.log(result)
//     }   
//     catch(error){
//         console.log(error)
//     }
// }
// sayhello()

//task8
// fetch()
// .then((val)=>{
//     if(!val.ok){
//         throw new Error("error is throwing");
//     }
//     return val.json()
// })
// .then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{
//     console.log(error);
// })

//task9
// async function sayhello(){
//     try{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/todo/1`)
//         if(!result.ok){
//             throw new Error("error throwing");
//         }
//         const data=await result.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// sayhello()

//extra
// function sayhello(){
//     throw "custom error throwing";
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log("catch block is executing--",error);
// }

// function sayhello(){
//     throw "custom error throwing";
// }
// function welcome(){
//     const result=sayhello()
//     console.log(result)
// }
// welcome()

// function sayhello(){
//     throw new Error("error throwing")
// }
// try{
//     console.log(sayhello())
// }
// catch(error){
//     console.log(error)
// }

// function sayhello(){
//     throw new Error("error throwing")
// }
// function welcome(){
//     const result=sayhello()
//     console.log(result)
// }
// welcome()