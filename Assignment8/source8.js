//Question1
let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades = newGrade;
    },
    computeAverageGrades: function () {
        return this.grades.reduce((a, b, i, array) => a + b / array.length, 0);
    }
}


let students = [Object.create(student), Object.create(student), Object.create(student)];
for (let i = 0; i < students.length; i++) {
    students[i].firstName = "John" + i;
    students[i].lastName = "Doe" + i;
    students[i].inputNewGrade([90 + i, 81 + i, 98 + i, 96 + i, 81 + i]);
    console.log(students[i].firstName, students[i].lastName, students[i].computeAverageGrades());
}
//************************************************************************************************
//Question2
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades = newGrade;
}
Student.prototype.computeAverageGrades = function () {
    return this.grades.reduce((a, b, i, array) => a + b / array.length, 0);
}

let allStudents = [new Student("John0", "Doe0"), new Student("John1", "Doe1"), new Student("John2", "Doe2")];
for (let i = 0; i < allStudents.length; i++) {
    allStudents[i].firstName = "John" + i;
    allStudents[i].lastName = "Doe" + i;
    allStudents[i].inputNewGrade([90 + i, 81 + i, 98 + i, 96 + i, 81 + i]);
    console.log(allStudents[i].firstName, allStudents[i].lastName, allStudents[i].computeAverageGrades());
}
//********************************************************************************************************
//Question3
Array.prototype.mySort = function () {
    let arr = this;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
    return arr;
}
let a = [3, 2, 4, 5, 1];
console.log(a);
a = a.mySort();
console.log(a);
//*******************************************************************************************************
//Question4
let OLLinkedListNode = {
    value: null,
    next: null
}
let OLLinkedList = {
    firstNode: null,
    lastNode: null,
    size: 0,
    add: function (value) {
        let newNode = Object.create(OLLinkedListNode);
        newNode.value = value;
        if (this.firstNode == null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.size++;
    },
    print: function () {
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
    },
    remove: function (value) {
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
        while (true) {
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
function LinkedListNode() {
    this.value = null;
    this.next = null;
}
function LinkedList() {
    this.firstNode = null;
    this.lastNode = null;
    this.size = 0;
}
LinkedList.prototype.add = function (value) {
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
LinkedList.prototype.print = function () {
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
LinkedList.prototype.remove = function (value) {
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
//calling object literal linkedlist
let OLlinkedlist = Object.create(OLLinkedList);
OLlinkedlist.add(1);
OLlinkedlist.add(2);
OLlinkedlist.add(3);
OLlinkedlist.print(); //Expected Result: LinkedList{1,2,3};
OLlinkedlist.remove(2);
OLlinkedlist.print(); //Expected Result: LinkedList{1,3};
//calling constructor linkedlist
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};