//task1
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },0);
// })
// promise
// .then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally")
// })

//task2
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("rejected")
//     },0)
// })
// promise
// .then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally")
// })

//task3
// function sayhello(){
//     return new Promise(async(resolve,reject)=>{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//         if(!result.ok){
//             throw new Error("something error 404");
//         }
//         const value=await result.json();
//         resolve(value);
//     })
// }
// function welcome(){
//     return new Promise(async(resolve,reject)=>{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
//         if(!result.ok){
//             throw new Error("something error 404")
//         }
//         const value=await result.json()
//         resolve(value)
//     })
// }
// function add(){
//     return new Promise(async(resolve,reject)=>{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/todos/3`)
//         if(!result.ok){
//             throw new Error("something error 404")
//         }
//         const value=await result.json()
//         resolve(value)
//     })
// }
// sayhello()
// .then((val)=>{
//     console.log("data from sayhello")
//     console.log(val);
//     return welcome()
// })
// .then((val)=>{
//     console.log("data from welcome")
//     console.log(val);
//     return add()
// })
// .then((val)=>{
//     console.log("data from add")
//     console.log(val)
// })
// .catch((error)=>{

// })
// .finally(()=>{
//     console.log("finally working")
// })

//task4
// function sayhello(){
//     return new Promise((resolve,reject)=>{
//         resolve("data")
//     })
// }
// async function welcome(){
//     const result=await sayhello()
//     console.log(result);
// }
// welcome()

//task5
// function sayhello(){
//     return new Promise((resolve,reject)=>{
//         reject("reject")
//     })
// }
// async function welcome(){
//     try{
//         const result=await sayhello()
//         console.log(result)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// task6
// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// .then((val)=>{
//     return val.json()
// })
// .then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally")
// })

//task7
// async function sayhello(){
//     try{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//         if(!result.ok){
//             throw new Error("error 404");
//         }
//         const value=await result.json();
//         console.log(value);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// sayhello()

//task8 9
// race,any,all,allsettled