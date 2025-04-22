var num1 = 0;
var num2 = 0;
var operation = "";


function operate(num1,num2,operation){
    if (operation == "+"){
        add(num1,num2)
    }else if (operation == "-"){
        subtract(num1,num2)
    }else if (operation == "*"){
        multiply(num1,num2)
    }else if (operation =="/"){
        divide(num1,num2)
    }else{
        console.log("Operator Not found")
    }

}



function add(num1,num2) {
    return num1 + num2
      
  };
  
  function subtract(num1,num2) {
      return num1 - num2
  };
  
  function multiply(num1,num2) {
    var multiply = num1 * num2;
    return multiply
  };
  
  function divide(num1,num2){
    return num1 / num2
  }