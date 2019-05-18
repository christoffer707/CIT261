/*****************************************************************/
/* tictactoe.js for week 04 Ponder assignment                    */
/* @author 		Dean Hall, Eric Okoro, Chris Hemming, Justin Hall */
/* @version  	1.0                                               */
/* @date: 		2019-04                                           */
/*  CIT 261    Spring 2019 Semester                              */
/*****************************************************************/
const boxClickX = [][];
const boxClickO = [][];

const nextPlayer = 'X';
 


function setClick(checkBoxValue) {
   if (player == 'X') {

      //boxClickX.push(document.getElementById("button"+buttonValue));
   } else {

   }
}


document.body.addEventListener('click', processMouce)



function reset() {
 console.dir(board);
 let r = 0;
 let c = 0;
 for (r < board.rows.length; r++) {
     let rows = board.rows[r];
     for (c < rows.cells.length; c++) {
         rows.cells[c].innerHTML = '';
     }
 }
 else () {
     break;
 }    
}