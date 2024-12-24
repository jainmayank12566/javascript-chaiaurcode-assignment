//task1
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010
// }
// console.log(book)

//task2
// const book={
    // title:"mr",
    // author:"hello",
    // year:2010
// }
// console.log(book.title)
// console.log(book.author)

//task3
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010,
//     sayhello(){
//         return `${this.title}-${this.author}`;
//     }
// }
// console.log(book.sayhello())

//task4
// const book={
    // title:"mr",
    // author:"hello",
    // year:2010,
    // sayhello(){
        // return `${this.title}-${this.author}`;
    // },
    // welcome(year){
        // this.year=year;
    // }
// }
// console.log(book)
// book.welcome(2009);
// console.log(book);

//task5
// const book={
    // title:"mr",
    // author:"hello",
    // year:2010,
    // library:{
        // name:"world",
        // books:[]
    // }
// }
// book.library.books.push(book);
// console.log(book.library)

//task6
// const obj={
//     author:"bakwas-0",
//     title:"book-0"
// }
// const newobj={
//     author:"bakwas-13",
//     title:"book-13"
// }
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010,
//     library:{
//         name:"world",
//         books:[obj,newobj]
//     }
// }
// console.log("name",book.library.name);
// book.library.books.forEach((val)=>{
//     console.log(val.title);
// })

//task7
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010,
//     sayhello(){
//         return `${this.title}-${this.year}`;
//     }
// }
// console.log(book.sayhello())

//task8
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010,
//     sayhello(){
//         return `${this.title}-${this.year}`
//     }
// }
// for(let i in book){
//     if(typeof book[i]==="function"){
//         console.log(i,book[i]())
//     }
//     else{
//         console.log(i,book[i])
//     }
// }

//task9
// const book={
//     title:"mr",
//     author:"hello",
//     year:2010,
//     sayhello(){
//         return `${this.title}-${this.year}`;
//     }
// }
// console.log(Object.keys(book));
// //or
// console.log(Object.getOwnPropertyNames(book));
// console.log(Object.values(book));