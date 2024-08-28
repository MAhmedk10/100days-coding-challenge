// Qno:10 ()
// This program counts the number of vowels from a given string
var vowelcount = 0;
function vowelCounter(str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var val = str_1[_i];
        if (val === "a" ||
            val === "e" ||
            val === "i" ||
            val === "o" ||
            val === "u") {
            vowelcount++;
        }
    }
    return vowelcount;
}
console.log(vowelCounter("muhammad"));
//Qno:11 ()
var freindArr = ["Muhammad", "Ahmed", "Ali"];
for (var index = 0; index < freindArr.length; index++) {
    console.log("Hello ".concat(freindArr[index]));
}
// Qno:11 ()
for (var _i = 0, freindArr_1 = freindArr; _i < freindArr_1.length; _i++) {
    var freind = freindArr_1[_i];
    console.log("Hello ".concat(freind, " how are you?"));
}
