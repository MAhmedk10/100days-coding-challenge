// Qno:13 ()
var myArray = ["Bike", "Car", "Yatch"];
var myFavouriteTransport = myArray.forEach(function (val) {
    console.log("My favourite transport is: \"".concat(val, "\""));
});
console.log(myFavouriteTransport);
// Qno:14 ()
var guests = ["Father", "Mother", "Grandparents", "Uncle"];
function invite() {
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("I would like to invite my ".concat(guest, " for dinner with me"));
    }
}
invite();
// Qno:15 ()
guests.splice(3, 1, "Aunty");
invite();
