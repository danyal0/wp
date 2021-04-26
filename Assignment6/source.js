function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;
        let shooter = function () {
            alert(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();


function printNumbers(from, to) {
    let cur = from;
    function doit() {
        alert(cur);
        if (cur == to) {
            clearInterval(interval);
        }
        cur++;
    }
    doit();
    let interval = setInterval(doit, 1000);
}
printNumbers(1, 5);