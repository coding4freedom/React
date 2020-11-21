class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentObj){
        if(
            this.students.filter((emailCheck) => emailCheck.email ===
            studentObj.email).length
        ){
            console.log("sorry, already registered!")
        } else{
            this.students.push(studentObj);
        }
        return this.students;
    }
}