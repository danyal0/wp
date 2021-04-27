function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army.forEach(fn => fn());


// function printNumbers(from, to) {
//     let cur = from;
//     function doit() {
//         alert(cur);
//         if (cur == to) {
//             clearInterval(interval);
//         }
//         cur++;
//     }
//     doit();
//     let interval = setInterval(doit, 1000);
// }
// printNumbers(1, 5);