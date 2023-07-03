function calculate(){
    n1 = document.getElementById("num1");
    op = document.getElementById("op");
    n2 = document.getElementById("num2");

    switch(op){
        case "+":
            document.writeln(n1+n2);
        case "-":
            document.writeln(n1-n2);
        case "*":
            document.writeln(n1*n2);
        case "/":
            document.writeln(n1/n2);
    }
}