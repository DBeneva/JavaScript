function inheritingAndReplacingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
            this.additionalInfo = '';
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email}${this.additionalInfo})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            this.additionalInfo = `, subject: ${this.subject}`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
            this.additionalInfo = `, course: ${this.course}`;
        }
    }

    return { Person, Teacher, Student };
}