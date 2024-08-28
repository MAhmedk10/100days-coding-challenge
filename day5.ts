// Qno:13 ()

const myArray: string[] = ["Bike", "Car", "Yatch"];

let myFavouriteTransport = myArray.forEach((val: string) => {
    console.log(`My favourite transport is: "${val}"`);
});
console.log(myFavouriteTransport);

// Qno:14 ()

const guests: string[] = ["Father", "Mother", "Grandparents", "Uncle"];
function invite() {
    for (let guest of guests) {
        console.log(`I would like to invite my ${guest} for dinner with me`);
    }
}
invite();


// Qno:15 ()

guests.splice(3, 1, "Aunty");
invite()


