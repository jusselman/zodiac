var zodiac = [
{
  sign: "aquarius",
  fortune: "Intelling, Kind, Stoic, Informative",
  image: "img/aquarius.jpg"
},
{
  sign: "aries",
  fortune: "Bubbily, Meticulous, Driven, Productive",
  image: "img/aries.jpg"
},
{
  sign: "cancer",
  fortune: "Intense, Impulsive, Choosy, Composed",
  image: "img/cancer.jpg"
}
];

var btn = document.getElementById('userdata');

// THIS GIVES THE ENTER KEY THE SAME FUNCTION AS
// THE BUTTON. NO idea HOW THIS WORKS //
btn.addEventListener('keypress', function enterKey(e) {
  if(e.keyCode == 13) {
    horoscope();
   };
 }, false);

 // the function that makes the button display horoscope

function horoscope() {
  // stores the tag with id="sign" in var userdata //
  var userdata = document.getElementById("userdata");

  // confirms the value is there in the console and show the
  //value the user inputs
  console.log(userdata);
  console.log("users value is: " userdata.value);

// LOOPS THROUGH ZODIAC ARRAY ONE BY ONE //
for(var i = 0; i < zodiac.length; i = i + 1) {
// CHECKS WHAT USER VALUE IS BEFORE USING IT IN A CONDITION???
// IS THIS HOW YOU DEAL WITH THE USER USING LOWER OR
// UPPERCASE? //
console.log("users value lowercase is: " + userdata.value.toLowerCase());
// CHECKS THE CURRENT item's SIGN IN THE ZODIAC ARRAY??? //
console.log("current zodiac sign in loop is: " + zodiac[i].sign);

// if the value the user input is changed to all lowercase
// letters, it will be equal to one of the signs,
//
if(userdata.value.toLowerCase() === zodiac[i].sign) {}
// confirm whether or not the statement ran //
console.log("if statement ran");

// checks some values in console, makes sense //
// before updating HTML???? //
// i've tried commenting this out, does it make a difference
// beyond the console?? //
console.log("users typed in: " + userdata.value);
console.log("current image value is: " + zodiac[i].image);
console.log("current fortune value is: " + zodiac[i].fortune);

// I'm assuming this is the text that goes above the //
// image of the zodiac symbol //
document.getElementById("yourSign").textContent = userdata.value;
// get element with id="icon" and
// change source attribute to current zodiac image path
// I'm assuming this is where the image comes from //
document.getElementById("icon").src = zodiac[i].image;
// // // get element with id="yourHoroscope" and
// change the content to this concatenated string
// pops the text in front of 'your best attributes are:'
document.getElementById("yourHoroscope").textContent = "Your best qualities are: " + zodiac[i].fortune;

//SINCE WE FOUND A MATCH, WE STOP THE LOOP WITH 'RETURN' //

return;
};

// display in console that no matches were FOUND
 // i.e. - user didn't type in a sign //
console.log("no matches were found, user")

// if no match is found, present text
// "Not one of the signs. Try again!"

document.getElementById("yourSign").textContent = "Not one of the signs, try again!"
// instead of showing your best qualities the next command
// prints nothing ""//
document.getElementById("youHoroscope").textContent = "";
// Prints no image, instead of the zodiac symbol //
document.getElementById("icon").src = "";

};
};
