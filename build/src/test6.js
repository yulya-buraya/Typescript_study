"use strict";
//Необходимо реализовать абстрактный класс Logger с 2-мя методами
//абстрактным - log(message): void
//printDate - выводящий в log дату
//К нему необходимо сделать реальный класс, который бы //имел метод: logWithDate,
//выводящий сначала дату, а потом заданное сообщение
class Logger1 {
    printDate(date) {
        this.log(date.toString());
    }
}
class LoggerWithDate extends Logger1 {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logWithDate = new LoggerWithDate();
logWithDate.logWithDate("gfgfgfgf");
