/*Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, 
как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства:
name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User), 
с помощью которого можно вывести одновременно имя и фамилию студента. 
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.*/

class User {
    constructor (options){
        this.name = options.name;
        this.surname = options.surname;
        this.year = options.year;
    }
    getFullName() {
        alert ( `${this.name}  ${this.surname}`);
    }

    getCourse(){
        alert (2023 - `${this.year}`);
    }
}

class Student extends User {}

const student = new Student({
    name: prompt ('Ваше имя :'),
    surname: prompt('Ваша фамилия:'),
    year: +prompt ('год поступления:')
});

student.getFullName();
student.getCourse();



