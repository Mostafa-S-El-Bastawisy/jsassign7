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
  document.write(`<hr>`)
  document.write(`</div>`);
}

console.log("########################");

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
	if (i !== exclude) {
		console.log(i);
	}
};

console.log("########################");

let start1 = 10;
let end1 = 0;
let stop1 = 3;

for (let k = start1; k >= stop1 ; k--) {
	if (k < start1) {
		console.log(`0${k}`);
	} else {
		console.log(k);
	}
}

console.log("########################");

let start2 = 1;
let end2 = 6;
let breaker1 = 2;

for (let j = start2; j <= end2 ; j++){
  console.log(j);
  console.log(`-- ${breaker1}`);
	console.log(`-- ${breaker1 + breaker1}`);
} 

console.log("########################");

let index = 10;
let jump = 2;
let end3 = 0;

for (;;) {
  if (index > jump) {
		console.log(index);
		index -= jump;
	} else break;
  
}

console.log("########################");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let value = [];


for (let a = value.length ; a < friends.length ; a++ ) {
  if (!friends[a].toLowerCase().startsWith(letter)){
    value.push(friends[a])
  }
}
for (let i = Number(!Array.isArray(friends)); i < value.length; i++) {
    console.log(`${i + letter.length} => ${value[i]}`);
  }

console.log("########################");

let start4 = 0;
let swappedName = "elZerO";
let str = "";

for (let f = start4; f < swappedName.length ; f++){
	swappedName[f] === swappedName[f].toLowerCase()
		? (str += swappedName[f].toUpperCase())
		: (str += swappedName[f].toLowerCase());
}
console.log(str);

console.log("########################");


let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start5; i < mix.length; i++) {
	if (!(mix[i] === mix[start5] || typeof mix[i] !== "number")) {
		console.log(mix[i]);
	}
}

console.log("########################");

let frind = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let ind = 0;
let counter = 0;

let validNames = [];

while (counter < frind.length) {
	if (
		typeof frind[counter] === "string" &&
		frind[counter][ind].toLowerCase() !== "a"
	) {
		validNames.push(frind[counter]);
	}
	counter++;
}

while (ind < validNames.length) {
	console.log(`"${ind + true} => ${validNames[ind]}"`);
	ind++;
}

