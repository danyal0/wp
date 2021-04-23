function sumOfGreaterThan20(entries) {
    const filtered = entries.filter(e => e > 20);
    const sum = filtered => filtered.reduce((a, b) => a + b, 0);
    return sum(filtered);
}
function getStringsGreaterThan4AndContainsA(entries){
    return entries.filter((e => e.length > 4 && e.includes("a")));
}
function Employee(firstName, lastName, birthDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.getAge = function (){
        //calculate month difference from current date in time
        const month_diff = Date.now() - this.birthDate.getTime();
        //convert the calculated difference in date format
        const age_dt = new Date(month_diff);
        //extract year from date
        const year = age_dt.getUTCFullYear();
        //now calculate the age of the user
        return Math.abs(year - 1970);
    }
    this.getName =  function (){
        return this.firstName + " " + this.lastName;
    }
}
function findEmployeeWhichAgeIsGreaterThan20(entries){
    const filtered = entries.filter(e => e.getAge() > 20);
    return filtered.map(({firstName,lastName,birthDate}) => ({firstName,lastName,birthDate}));
}

function findEmployeeBornAfter2000(entries){
    const filtered = entries.filter(e => e.birthDate.getUTCFullYear() > 2000);
    return filtered.map(e => e.getName());
}

//Sum of all the elements which are greater than 20
console.log("Sum of all the elements which are greater than 20:");
console.log(sumOfGreaterThan20([1,50,40,3,10]));
console.log("***********************************************************************************");

//All strings which length is greater than and equals to 5 and contains 'a'
console.log("\n All strings which length is greater than and equals to 5 and contains 'a':");
console.log(getStringsGreaterThan4AndContainsA(["a","abcde","","bacdef","abcd","bcdef"]));
console.log("***********************************************************************************");

//Employee which age is greater than 20
console.log("\n Employee which age is greater than 20:");
console.log(findEmployeeWhichAgeIsGreaterThan20([new Employee("John","Doe",new Date("2001-03-25")),new  Employee("Danyal","Javed",new Date("1995-09-16"))]));
console.log("***********************************************************************************");

//Employee which are born after 2000
console.log("\n Employee which are born after 2000:");
console.log(findEmployeeBornAfter2000([new Employee("John","Doe",new Date("2001-03-25")),new  Employee("Danyal","Javed",new Date("1995-09-16"))]));
