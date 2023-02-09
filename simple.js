function msg(){
    alert("Hello Js")
    document.writeln("Hello")
    var a=10;
    document.writeln(a);
    function abc(){
        document.writeln("print")
        function bc(){
            document.writeln("inside")
        }
        bc();
    }   
    document.writeln("first");
    abc();

    window.value=90;
    function m(){
        window.value=100;
    }
    function n(){
        alert(window.value);
    }
    m();
    n();
}
