// window.alert("Hello JavaScript");

// // The below is same

// alert("hrllo js");


function msg(){
    alert("Hello Alert Box");
}

function msg1(){
    var v = confirm("Are u sure?");
    if(v==true){
        alert("ok");
    }
    else{
        alert("cancel");
    }
}


function msg2(){
    var  v = prompt("Who are you?");
    alert("I am "+v);
}

function op(){
    open("http://www.javatpoint.com");
}