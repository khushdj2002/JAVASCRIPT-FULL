//  A method to declare a class
class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    details(){
        document.writeln(this.id+" "+this.name+"<br>")
    }
}

var e1  = new Employee(101,"Kiran");
var e2  = new Employee(102,"Kiran D J");
e1.details();
e2.details();

//  Another way to declare a class
var empcl = class {  
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
    }  
  };  
  document.writeln(empcl.name);  

//   A method to declare an object i sshown below

// emp = {
//     id:201,name:"Kushal",salary:4000
// }
// document.write(emp.id+" "+emp.salary);

// var xyz = new Object();


