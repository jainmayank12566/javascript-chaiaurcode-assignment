//task1
// const str="hello world";
// localStorage.setItem("fullname",str);
// console.log(localStorage.getItem("fullname"))

//task2
// const obj={
//     fullname:"hello",
//     age:100
// }
// console.log(obj)
// localStorage.setItem("obj",JSON.stringify(obj));
// const result=JSON.parse(localStorage.getItem("obj"))
// console.log(result)

//task3
// const form=document.querySelector("form");
// const h1=document.getElementById("h1");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const username=document.getElementById("username")
//     const email=document.getElementById("email");
//     console.log(username.value)
//     console.log(email.value)
//     localStorage.setItem("fullname",username.value);
//     localStorage.setItem("email",email.value);
// })
// window.addEventListener("load",()=>{
//     if(localStorage.getItem("fullname") && localStorage.getItem("email")){
//         h1.innerText=`${localStorage.getItem("fullname")}-${localStorage.getItem("email")}`;
//         console.log(localStorage.getItem("fullname"))
//         console.log(localStorage.getItem("email"))
//     }
// })

//task4
// localStorage.setItem("fullname","helloworld");
// console.log(localStorage.getItem("fullname"));
// localStorage.removeItem("fullname");
// console.log(localStorage.getItem("fullname"));

//task5
// const str="hello";
// sessionStorage.setItem("fullname",str);
// console.log(sessionStorage.getItem("fullname"));

//task6
// const obj={
    // fullname:"hello",
    // age:100
// }
// sessionStorage.setItem("obj",JSON.stringify(obj));
// console.log(JSON.parse(sessionStorage.getItem("obj")))

//task7
// const h1=document.getElementById("h1");
// const form=document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const username=document.getElementById("username");
//     const email=document.getElementById("email");
//     sessionStorage.setItem("username",username.value)
//     sessionStorage.setItem("email",email.value);
// })
// window.addEventListener("load",()=>{
//     if(sessionStorage.getItem("username") && sessionStorage.getItem("email")){
//         h1.innerText=`${sessionStorage.getItem("username")}-${sessionStorage.getItem("email")}`;
//         console.log(sessionStorage.getItem("username"))
//         console.log(sessionStorage.getItem("email"))
//     }
// })

//task8
// sessionStorage.setItem("fullname","helloworld");
// console.log(sessionStorage.getItem("fullname"))
// sessionStorage.removeItem("fullname");
// console.log(sessionStorage.getItem("fullname"))

//task9
// function sayhello(key,value){
//     localStorage.setItem(key,value);
//     sessionStorage.setItem(key,value);
//     console.log("localstorage-",localStorage.getItem(key))
//     console.log("sessionstorage-",sessionStorage.getItem(key))
// }
// sayhello("fullname","helloworld");

//task10
// function sayhello(){
//     localStorage.clear()
//     sessionStorage.clear()
// }
// localStorage.setItem("fullname","hello")
// localStorage.setItem("age",100)
// sessionStorage.setItem("age",100);
// sayhello();