const previusOperationsText = document.querySelector("#previous-operation")
const previousOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator{
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation = ""
  }
  
  //add digit tô Calculator screen
  addDigit(digit){
    
    console.log(digit)
    
  }
  
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    
    if(+value >= 0 || value === "."){
      calc.addDigit(value)
    }else{
      console.log("Op:"+ value)
    }
    
    
  });
});
  
