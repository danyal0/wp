let animal = {

    eats:true

}
let rabbit = {jumps:{value:true}}

rabbit = Object.create(animal, rabbit);
console.log(rabbit.jumps);


// let animal1={
//     eats:true
// }
// let rabbit1 ={
//
//     walk:true
// }
// rabbit1 = Object.create(animal1);
// console.log(rabbit1.walk);