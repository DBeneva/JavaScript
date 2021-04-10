function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function (value) {
            [this.firstName, this.lastName] = value.split(' ').length == 2 ?
                value.split(' ') : [this.firstName, this.lastName];
        }
    });
}


let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson