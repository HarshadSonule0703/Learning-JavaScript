/* Create a faulty calculator using javascript

The faulty calculator dose following

1.  It's take two number as a input from user
2. It performs wrong operations as follows: 

+  -------->  -
*  -------->  +
-  -------->  /
/  -------->  **


It performs wrong operations 10% of the times


*/

let numone = prompt("Enter the first number: ");
let numtwo = prompt("Enter you second number: ");
let operation = prompt("What operation you want to do?");

let random = Math.random();
// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**"
// }

if(random > 0.1){
    if(operation == "+"){
        alert(numone + numtwo);
    }
    else if(operation == "*"){
        alert(numone* numtwo);
    }
    else if(operation == "-"){
        alert(numone - numtwo);
    }
    else if(operation == "/"){
        alert(numone/ numtwo);
    }
    else if(operation == "**"){
        alert(numone ** numtwo);
    }
    else{
        alert("Invalid input");
    }
    
    //perform right operation 

}
else{
    // operation = obj[operation];
    // //perform wrong operation
    if(operation == "+"){
        alert(numone - numtwo);
    }
    else if(operation == "*"){
        alert(numone + numtwo);
    }
    else if(operation == "-"){
        alert(numone / numtwo);
    }
    else if(operation == "/"){
        alert(numone** numtwo);
    }
    else if(operation == "**"){
        alert(numone * numtwo);
    }
    else{
        alert("Invalid input");
    }

}






