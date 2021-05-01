//Solution1
// Add a line of code that will stop the clock after 10 ticks
class Clock {
    count = 0;
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
        if(this.count>8)
            clearInterval(this.timer);
        this.count++;
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();

//What is the inner function of the constructor function?
// render

// What is the local variable of the constructor function?
// timer

// What is the clock “interface” returned by the constructor function?
// An object of Clock

// What are the closures?
// No

// What are the private variables and functions?
// timer, render

// What are the public methods?
// stop,start

//Solution2
class LinkedListNode {
    value = null;
    next = null;
}
class LinkedList {
    firstNode = null;
    lastNode = null;
    size = 0;
    add(value) {
        let newNode = new LinkedListNode();
        newNode.value = value;
        if (this.firstNode == null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.size++;
    }
    print() {
        let currentNode = this.firstNode;
        let result = 'LinkedList{';
        for (let i = 0; currentNode != null; i++) {
            if (i > 0) {
                result += ',';
            }
            let valueObject = currentNode.value;
            result += (valueObject == null ? '' : valueObject);
            currentNode = currentNode.next;
        }
        result += '}';
        console.log(result);
    }
    remove(value) {
        let currentNode = this.firstNode;
        if (this.size === 0) {
            return;
        }
        let wasDeleted = false;
        if (value === currentNode.value) {
            if (currentNode.next == null) {
                this.firstNode.value = null;
                this.firstNode = null;
                this.lastNode = null;
                this.size--;
                return;
            }
            currentNode.value = null;
            currentNode = currentNode.next;
            this.firstNode = currentNode;
            this.size--;
            return;
        }
        while(true) {
            if (currentNode == null) {
                wasDeleted = false;
                break;
            }
            let nextNode = currentNode.next;
            if (nextNode != null) {
                if (value === nextNode.value) {
                    currentNode.next = nextNode.next;
                    nextNode = null;
                    wasDeleted = true;
                    break;
                }
            }
            currentNode = currentNode.next;
        }
        if (wasDeleted) {
            this.size--;
        }
    }
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};


//Solution3
class Question{
    constructor(qid, answer){
        this.qid = qid;
        this.answer = answer;
    }
    checkAnswer(answer){
        return this.answer === answer;
    }
}

class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    addAnswer(question){
        this.answers.push(question);
    }
}
class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = students;
    }
    scoreStudentBySid(studentId){
        const student = this.students.filter(s => s.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            if(currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))){
                sum = sum + 1;
            }
            return sum;
        }, 0);
    }
    getAverageScore(){
        return this.students.reduce((accumulator, student, index, array)=>{
            return accumulator + this.scoreStudentBySid(student.studentId) / array.length;
        }, 0);
    }
}
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);
let average = quiz.getAverageScore();
console.log(average);
