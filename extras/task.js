function Calculator(x,y){
    this.x = x;
    this.y = y;
}
Calculator.prototype.add = function (){
    return this.x+this.y;
}
Calculator.prototype.subtract = function (){
    return this.x-this.y;
}
Calculator.prototype.multiply = function (){
    return this.x*this.y;
}
Calculator.prototype.divide = function (){
    if(this.y==0)
        return 0;
    return this.x/this.y;
}
let sample = new Calculator(3,2);
console.log(sample.add());
console.log(sample.subtract());
console.log(sample.multiply());
console.log(sample.divide());


indexOf: function (value) {
    let currentNode = this.firstNode;
    let position = 0;
    let found = false;
    while (true) {
        if (currentNode == null) {
            break;
        }
        if (value === currentNode.value) {
            found = true;
            break;
        }
        currentNode = currentNode.next;
        position++
    }
    if (!found) {
        position = -1;
    }
    return position;
},

LinkedList.prototype.indexOf = function (value) {
    let currentNode = this.firstNode;
    let position = 0;
    let found = false;
    while (true) {
        if (currentNode == null) {
            break;
        }
        if (value === currentNode.value) {
            found = true;
            break;
        }
        currentNode = currentNode.next;
        position++;
    }
    if (!found) {
        position = -1;
    }
    return position;
}
