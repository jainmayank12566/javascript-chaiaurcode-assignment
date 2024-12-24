//task1
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         return `${this.name}-${this.age}`
//     }
// }
// const person1=new Person("hello",100);
// console.log(person1);
// console.log(person1.greeting())

//task2
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         return `${this.name}-${this.age}`
//     }
//     updateproperty(age){
//         this.age=age;
//     }
// }
// const person1=new Person("hello",100)
// console.log(person1);
// person1.updateproperty(1)
// console.log(person1)

//task3
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         return `${this.name}-${this.age}`;
//     }
//     updateproperty(age){
//         this.age=age;
//     }
// }
// class Student extends Person{
//     constructor(name,age,studentid){
//         super(name,age)
//         this.studentid=studentid;
//     }
//     studentinfo(){
//         return `${this.studentid}`
//     }
// }
// const student1=new Student("hello",1,100);
// console.log(student1)
// console.log(student1.studentid)

//task4
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         return `${this.name}-${this.age}`;
//     }
//     updateproperty(age){
//         this.age=age;
//     }
// }
// class Student extends Person{
//     constructor(name,age,studentid){
//         super(name,age)
//         this.studentid=studentid;
//     }
//     studentinfo(){
//         return `${this.studentid}`
//     }
//     greeting(){
//         return `${this.name}-${this.age}-${this.studentid}`
//     }
// }
// const student1=new Student("hello",1,100);
// console.log(student1)
// console.log(student1.greeting())

//task5
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     static greeting(){
//         return `hello i am from static greeting`
//     }
// }
// console.log(Person.greeting())

//task6
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// class Student extends Person{
//     static studentcount=0;
//     constructor(name,age,studentid){
//         super(name,age);
//         this.studentid=studentid;
//         Student.studentcount++;
//     }
// }
// console.log("student count",Student.studentcount);
// const student1=new Student("hello",1,100);
// console.log(student1)
// console.log(Student.studentcount);
// const person13=new Student("world",1,1);
// console.log(person13);
// console.log("student count",Student.studentcount)
// Student.studentcount=10;
// console.log("student count",Student.studentcount);
// const student121=new Student("h",1,1);
// console.log(student121);
// console.log("student count",Student.studentcount);

//task7
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     get fullname(){
//         return `${this.firstname}-${this.lastname}`;
//     }
// }
// const person1=new Person("hello","world");
// console.log(person1);
// console.log(person1.fullname)

//task8
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     get fullname(){
//         return `${this.firstname}-${this.lastname}`;
//     }
//     set fullname(name){
//         const[firstname,lastname]=name.split(' ')
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// const person1=new Person("hello","world");
// console.log(person1);
// person1.fullname="newhello newworld";
// console.log(person1)

// class Account{
//     #balance=0;
//     constructor(money){
//         this.#balance=money;
//     }
//     deposit(money){
//         this.#balance +=money;
//     }
//     withdraw(money){
//         this.#balance -=money;
//     }
//     balance(){
//         console.log(this.#balance)
//     }
// }
// const person1=new Account(100);
// console.log(person1);
// person1.deposit(1000);
// person1.balance()
// person1.withdraw(100);
// person1.balance()