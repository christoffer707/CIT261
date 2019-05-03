/***********************************************************/
/* calc.js for week 02 Ponder assignment                   */
/* @author 		Dean Hall, Eric Okoro, Chris Hemming, Justin Hall: 	   */
/* @version  	1.0                                        */
/* @date: 		2019-04                                    */
/*  CIT 261    Spring 2019 Semester                        */
/***********************************************************/

function readInput(){
    //console.log("in function readInput");
   var  numberIn  = document.getElementById('inputNumber').value;
    //console.log("numberIn : " + numberIn);
    
   var  outputNumber = document.getElementById('display1');
   outputNumber.innerHTML = 'You entered: ' + numberIn;
  
}


function sum(){
    let  numberIn  = document.getElementById('inputSumNumber').value;
    let answer = 0;
   
    if (!Number.isNaN(numberIn)) {
        for (let count = 1; count <= numberIn; count++) {
             answer += count;
        }
    } else {
        answer = "Not a number";
    }

    var  outputNumber = document.getElementById('sumFunction');
    outputNumber.innerHTML = 'Your sum: ' + answer; 
   
}