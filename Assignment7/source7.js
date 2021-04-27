//****************************************************************
//Question1
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

//Wrapper
// askPassword(() => user.loginOk(), () => user.loginFail());

//Binding
// askPassword(user.loginOk.bind(user), () => user.loginFail.bind(user));

//call
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

//apply
// askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));


//***********************************************************************************


//Question2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();
