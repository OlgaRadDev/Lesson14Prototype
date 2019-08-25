// Вам нужно сделать конструктор сущности Студент.
//
//     У Студента есть имя, фамилия, год рождения — это свойства.
//     Есть массив с оценками, это тоже свойство.
//     И есть возможность получить возраст студента и его средний бал — это методы.
//     Еще у всех Студентов есть по массиву одинаковой длины, в нем 30 элементов,
// изначально он не заполнен, но на 30 элементов. Это массив в котором отмечается
// посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое
// место в массив записывается true, когда вызываем .absent() — записывается false.
//     Есть массив с оценками и метод mark(), мы можем передать оценку от 0 до 10.
//
//
// Предусмотрите какую нибудь защиту от того чтоб в массивах не могло быть
// более 30 записей.
//     Массив это свойство, present и absent, mark — методы.
//
//     Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение,
//     и если средняя оценка больше 9 а среднее посещение больше 0.9, то метод summary,
//     возвращает строку "Ути какой молодчинка!", если одно из этих значений меньше,
//     то — "Норм, но можно лучше", если оба ниже — "Редиска!".
//     Ну и не забудьте после того как напишите замечательный конструктор,
    // создать пару экземпляров(конкретных студентов) и подергать методы.

function Student(name, surname, yearBirth) {
    this.name = name;
    this.surname = surname;
    this.yearBirth = yearBirth;
    this.mark = [];
    this.attendance = [];
}

Student.prototype.getFullName = function () {
    return this.name +' '+ this.surname;
};

Student.prototype.getAgeStudent = function () {
    let objDate = new Date();
    let curYear = objDate.getFullYear();
    return curYear - this.yearBirth;

};

Student.prototype.getAverageMark = function () {
    let sumMark = this.mark.reduce(function (sum, mark) {
        return sum + mark;
    },0);
    let avgMark = (sumMark/this.mark.length).toFixed(2);
    return avgMark;
};

Student.prototype.fillMark = function (mark) {
    if (this.mark.length <30) {
        return this.mark.push(mark);
    } else
        return false;
};

Student.prototype.isPresent = function () {
    if (this.attendance.length <30) {
        return this.attendance.push(true);
    } else
        return false;

};
Student.prototype.isAbsent = function () {
    if (this.attendance.length <30) {
        return this.attendance.push(false);
    } else
        return false;
};
Student.prototype.getAvgAttendance = function () {
    let attend = this.attendance.filter(function (item) {
        if (item)
            return item;
        });
    let avgAttendance = (attend.length/this.attendance.length).toFixed(2);
    return avgAttendance;

};

Student.prototype.checkSummary = function () {
    if (this.getAverageMark()>9 && this.getAvgAttendance()>0.9){
        return 'Ути какой молодчинка!';
    } else if ((this.getAverageMark()<9 && this.getAvgAttendance()>0.9) || (this.getAverageMark()>9 && this.getAvgAttendance()<0.9)) {
        return 'Норм, но можно лучше'
    } else
        return 'Редиска!';

};
console.log('First student ----------------------------');
const alex = new Student('Alex', 'Ivanov', '1992');
console.log(alex.getFullName());
console.log('Age student: ' + alex.getAgeStudent());

alex.fillMark(5);
alex.fillMark(10);
alex.fillMark(10);
alex.fillMark(10);
alex.fillMark(10);
alex.fillMark(10);
console.log('Average mark: ' + alex.getAverageMark());
alex.isPresent();
alex.isPresent();
alex.isAbsent();
alex.isAbsent();
alex.isPresent();
alex.isPresent();
console.log('Average attandance: '+ alex.getAvgAttendance());
console.log(alex);
console.log('Work result: '+alex.checkSummary());

console.log('Second student ----------------------------');
const petya = new Student('Petya', 'Petechkin', '1995');
console.log(petya.getFullName());
console.log('Age student: ' + petya.getAgeStudent());

petya.fillMark(5);
petya.fillMark(2);
petya.fillMark(0);
petya.fillMark(1);
petya.fillMark(8);
petya.fillMark(10);
console.log('Average mark: ' + petya.getAverageMark());
petya.isPresent();
petya.isPresent();
petya.isAbsent();
petya.isAbsent();
petya.isPresent();
petya.isPresent();
console.log('Average attandance: '+ petya.getAvgAttendance());
console.log(petya);
console.log('Work result: '+petya.checkSummary());

console.log('Third student ----------------------------');
const vasiliy = new Student('Vasiliy', 'Orlov', '1991');
console.log(vasiliy.getFullName());
console.log('Age student: ' + vasiliy.getAgeStudent());

vasiliy.fillMark(10);
vasiliy.fillMark(10);
vasiliy.fillMark(10);
vasiliy.fillMark(10);
vasiliy.fillMark(9);
vasiliy.fillMark(10);
console.log('Average mark: ' + vasiliy.getAverageMark());
vasiliy.isPresent();
vasiliy.isPresent();
vasiliy.isPresent();
vasiliy.isPresent();
vasiliy.isPresent();
vasiliy.isPresent();
console.log('Average attandance: '+ vasiliy.getAvgAttendance());
console.log(vasiliy);
console.log('Work result: '+vasiliy.checkSummary());


