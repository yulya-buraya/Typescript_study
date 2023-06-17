//Необходимо реализовать абстрактный класс Logger с 2-мя методами
//абстрактным - log(message): void
//printDate - выводящий в log дату
//К нему необходимо сделать реальный класс, который бы //имел метод: logWithDate,
//выводящий сначала дату, а потом заданное сообщение
abstract class Logger1{
    abstract log(message:string):void;
    printDate(date:Date){
        this.log(date.toString());
    }
}

class LoggerWithDate extends Logger1{
log(message:string):void{
  console.log(message);
}   
logWithDate(message:string):void{
    this.printDate(new Date);
    this.log(message);
  }  
}
const logWithDate=new LoggerWithDate();
logWithDate.logWithDate('gfgfgfgf');