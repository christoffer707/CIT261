/***********************************************************/
/* calc.js for week 02 Ponder assignment                   */
/* @author 		Dean Hall, Eric Okoro, Chris Hemming, Justin Hall: 	   */
/* @version  	1.0                                        */
/* @date: 		2019-04                                    */
/*  CIT 261    Spring 2019 Semester                        */
/***********************************************************/

function readInput(){
   let numberIn = document.getElementById("inputNumber").valueOf;

   document.getElementById("dispay").innerHTML.display = numberIn.valueOf;

}


function sum(inputNumber){
    let answer = 0;
    let count = 1;
    
    if (count <= inputNumber) {
        answer + count;
        count + 1;
    }
    else {
        break;
    }
    
    document.getElementById('sumFunction').innerHTML.valueOf = answer;
}