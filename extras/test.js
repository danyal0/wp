// let animal = {
//
//     eats:true
//
// }
// let rabbit = {jumps:{value:true}}
//
// rabbit = Object.create(animal, rabbit);
// console.log(rabbit.jumps);


// let animal1={
//     eats:true
// }
// let rabbit1 ={
//
//     walk:true
// }
// rabbit1 = Object.create(animal1);
// console.log(rabbit1.walk);


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(student=>
//             console.log(this.title + ": " + student)
//         );
//     }
// };
// group.showList();

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'John',
//
//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
//
// };
//
// askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
// var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
// console.log('myFish before: ' + myFish);
// var shifted = myFish.shift();
// console.log('myFish after: ' + myFish.slice(1,2));
// console.log('Removed this element: ' + shifted);
// animal has methods
const x=5;
console.log(!x);
console.log(x);
console.log(!!x);