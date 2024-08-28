// Qno:1 (Node.js intsalled,Vs code and Typescript installed)
// Qno:02 ()
var personName = "muhammad";
console.log("Hello ".concat(personName, " would you like to learn some Typescript today?"));
// Qno: 03 ()
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
var forTitleCase = personName.slice(1, 8);
console.log("".concat(personName.charAt(0).toUpperCase()).concat(forTitleCase));
//Another metod for printing personName in titlecase
var titleCase = personName.replace("m", "M");
console.log(titleCase);
