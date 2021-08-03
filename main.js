/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let x = 5;

// let firsAdmin = myAdmins[0][0];
// let firsEmp = myEmployees[0][0];
// console.log(firsAdmin);
// console.log(firsEmp);


document.write(`<div><h2>We Have ${x} Admins</h2></div>`);
document.write(`<hr />`);

for ( let i = 0; i < x ; i++ ) {
  document.write(`<div>`);
  document.write(`<h3>The Admin For Team ${i + 1} is <strong>${myAdmins[i]}</strong></h3>`);
  document.write(`<h3>Team of Members :</h3>`);
  for( let j = 0; j < myEmployees.length; j++ ) {
    document.write(`<h4> ${j + 1} - ${myEmployees[j]}</h4>`);
  }
  // for ( let k = 0 ; k < firsAdmin ; k++){
  //     for ( let l = 0 ; l < firsEmp ; l++);
  //     if( firsAdmin[k] === firsEmp[l]);
      
  // }
    
    
  document.write(`<hr>`)
  document.write(`</div>`);
}

//---------------------//

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
	if (i !== exclude) {
		console.log(i);
	}
}




