// Qno:10 ()

// This program counts the number of vowels from a given string

let vowelcount: number = 0;

function vowelCounter(str: string):number {
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      vowelcount++;
    }
  }
  return vowelcount
}

console.log(vowelCounter("muhammad"))

//Qno:11 ()

const freindArr:string[] = ["Muhammad","Ahmed","Ali"]

for (let index = 0; index < freindArr.length; index++) {
 console.log(`Hello ${freindArr[index]}`);
  
};

// Qno:12 ()


for(let freind of freindArr){
  console.log(`Hello ${freind} how are you?`);
};
