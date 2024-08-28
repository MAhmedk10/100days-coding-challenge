// Qno:1 (Node.js intsalled,Vs code and Typescript installed)

// Qno:02 ()

let personName:string = "muhammad";
console.log(`Hello ${personName} would you like to learn some Typescript today?`)

// Qno: 03 ()

console.log(personName.toUpperCase())
console.log(personName.toLowerCase())

let forTitleCase: string = personName.slice(1,8)
console.log(`${personName.charAt(0).toUpperCase()}${forTitleCase}`)

//Another metod for printing personName in titlecase

let titleCase:string = personName.replace("m","M")
console.log(titleCase);
