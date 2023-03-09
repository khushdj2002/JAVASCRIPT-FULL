function msg(){
    var objectname = new Object();
    objectname.id=101;
    objectname.name="Kushal";
    document.write(objectname.id+" "+objectname.name);
}
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e=new emp(103,"Kushal",50000);

document.writeln(e.id+" "+e.name+" "+e.salary)

var arr=[1,2,3];
for(var i=0;i<arr.length;i++){
    document.writeln(arr[i]+"<br>");
}


var arrname = new Array();

arrname[0]=10;
arrname[1]=20;
arrname[2]=30;

for(var i=0;i<arrname.length;i++){
    document.writeln(arrname[i]+"<br>");
}

var newArr = new Array("jay","kus","kav");
for(var i=0;i<newArr.length;i++){
    document.writeln(newArr[i]+"<br>");
}
var result = arrname.concat(newArr,arr);
    document.writeln(result);

   var copyArr=arr.copyWithin(0,1,2);
   document.writeln(copyArr+"<br>"); 

var copy1=["AngulrJs","Node.js","JQuery","Botstrap"];
var copy2=["AngulrJs","Node.js","JQuery","Botstrap"];

var result1=copy1.copyWithin(1.2);  
document.writeln(result1+"<br");  

var result2=copy2.copyWithin(2);  
document.writeln(result2+"<br>");
function arrcal(){
var ent =['John','Michael','Embrose','Herry','Lewis'];  
var itr=ent.entries();  
document.write("After applying the entries method:"+"<br>");  

for(var e of itr) //for loop using var.  
{  
    document.write(e+"</br>");  
}  
}

var marks=[30,40,50,20,10];
function check(value){
    return value>30;
}

document.writeln(marks.every(check)+"<br>");
function test(element, index, array) {  
    return index < 4;  
  }  
  document.writeln([21,32,2,43].every(test)+"<br>"); //true
//   document.writeln("<br>")  
  document.writeln([21,32,2,43,35].every(test)+"<br>"); //false  