function getAdd() {
			
    // Fetch the value of input with id val1
    const num1 = Number(document.getElementById("val1").value);
    
    // Fetch the value of input with id val2
    const num2 = Number(document.getElementById("val2").value);
   //Declare the ID first before you set a condition :D and return ends the statement so no point of also having an else statement
    if ( num1 < 1 || num1 > 10 || num2 < 1 || num2 > 10) {
        alert("Values must be between 1 and 10.");
        return; 
    }
    
    // Fetch the selected operator
    const selectedOperator = document.getElementById("operators").value;

    // Perform the calculation based on the selected operator
    let result;
    if (selectedOperator === "+") {
        result = num1 + num2;
    } else if (selectedOperator === "-") {
        result = num1 - num2;
    } else if (selectedOperator === "*") {
        result = num1 * num2;
    } else if (selectedOperator === "/") {
        result = num1 / num2;
    }

    console.log(result);

    // Displays the result in paragraph using DOM
    document.getElementById("result").innerHTML = "The result of the calculation is : " + result;
    
    // Changes the color of paragraph tag with red
    document.getElementById("result").style.color = "red";
    
    //this was totally not painful to figure out
    }