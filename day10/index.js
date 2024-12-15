//task1
// const p=document.querySelector("P");
// const buttons=document.querySelector("button");
// buttons.addEventListener("click",()=>{
//     p.innerText="changed";
// })

//task2
// const img=document.querySelector("img");
// img.addEventListener("click",()=>{
//     if(img.style.display==="inline"){
//         img.style.display="block";
//     }
//     else{
//         img.style.display="inline";
//     }
// })

//task3 task4
// const div=document.querySelector("div");
// const value=div.style.backgroundColor;
// div.addEventListener("mouseover",()=>{
//     div.style.backgroundColor="yellow";
// })
// div.addEventListener("mouseout",()=>{
//     div.style.backgroundColor=value;
// })

//task5
// const input=document.querySelector("input[type='text']")
// input.addEventListener("keydown",(e)=>{
    // console.log(e.key)
// })

//task6
// const p=document.querySelector("p")
// const input=document.querySelector("input[type='text']")
// input.addEventListener("keyup",(e)=>{
    // p.innerText=e.target.value;
// })

//task7
// const form=document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const username=document.getElementById("username");
//     const password=document.getElementById("password");
//     console.log(username.value)
//     console.log(password.value)
// })

// task8
// const p=document.querySelector("p")
// const select=document.querySelector("select");
// const value=select.value;
// p.innerText=value;
// select.addEventListener("change",(e)=>{
//     p.innerText=e.target.value;
// })

//task9
// const ul=document.querySelector("ul")
// ul.addEventListener("click",(e)=>{
//     if(e.target.tagName==="LI"){
//         console.log(e.target.innerText);
//     }
// })

//task10
// const div=document.querySelector("div")
// const buttons=document.querySelector("button");
// let count=0;
// div.addEventListener("click",(e)=>{
//     if(e.target.tagName.toLowerCase()==="h1"){
//         console.log(e.target.innerText);
//     }
// })
// buttons.addEventListener("click",()=>{
//     const ele=document.createElement("h1");
//     ele.innerText=`hello-${count}`;
//     count++;
//     div.append(ele);
// })