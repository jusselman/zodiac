// console.log ("check me out")
//
// document.write ("writing in java rocks")
//
// alert("2016 is sooooo last year")
//
// console.log ("I hope numerous lines won't f this up")
//
// document.write (" thank god, .write turned blue")
//
// alert("I wonder how many alerts I can put in here")
//
// console.log ("this is the mf-in' sandbox")
//
// document.write (" Fuck HTML")
//
// alert("Third times a charm")

// var motherfucker = prompt("What's your name?")
//
// console.log(motherfucker)
//
// var one = 12 + 18888 + 5678956 * 5555 / 3808
// console.log(one)
//
// var two = true
// console.log(two)
//
// var three = "string"
// console.log(three)
//
// var four = [140, true, "string"]
// console.log(four)

// const entree = 'Enchiladas';
//
// const price = 12;
//
// console.log(entree);
// console.log(price);
//
// entree = 'Tacos';

// for(var i = 1; i <= 20; i = i + 1) {
//   document.write(i)
// }

// document.write("hello world")
//
// var num1 = 10
// var num2 = 15
//
// function add(a, b) {
//   document.write(a + b)
// }
//
// add(5, 5)


//WEEK EIGHT BOB AND ALICE //
// var username = prompt("What's your name")
//
//
// if(username == "Alice" || username == "Bob") {
//   document.write("Well hello there " + username + "!")
// } else{
//     document.write("Who the F are you " + username + "!?")
// }



// MODIFY SO ONLY ALICE AND BOB ARE GREETED WITH THEIR NAMES //

// GET ELEMENT BY ID //

// var content = "write anything here"
// document.getElementById("message").innerHTML = content


// .VALUE TO RETRIEVE FORM //

// function getInfo() {
//     var username = document.getElementById("username").value
//     var password = document.getElementById("password").value
//     console.log("your username is " + username + " and your password is " + password )
//
// }

// LOOPING THROUGH AN ARRAY //
// var cars = ["fiat", "benz", "honda", "toyota"]
// console.log(cars.length)
//
//
// for(i = 0; i < cars.length; i++) {
//     if(cars[i] = "benz") {
//       console.log("Your " + cars[i] + " kills it!")
//     }
//   }

// FIND THE BIGGEST NUMBER AND DISPLAY IN CONSOLE //

// var arr = [12, 32, 45, 67, 78]
// var biggest = 0
//
//
// for(i = 0; i < arr.length; i++) {
//     if(biggest < arr[i]) {
//       biggest = arr[i]
//       console.log(biggest)
//
//     }
// }

// console.log(biggest)

// CREATING OBJECTS CREATING OBJECTS CREATING OBJECTS //

// var cars = [
//
//
//     {
//     make: "honda",
//     model: "civic",
//     year: 2014,
//     color: "blue"
//   },
//
//     {
//     make: "toyota",
//     model: "camry",
//     year: 2008,
//     color: "red"
//   },
//
//     {
//     make: "ford",
//     model: "mustang",
//     year: 2005,
//     color: "green"
//   },
//   ]
//
//   console.log(cars[0].make)
//
//   for(i = 0; i < cars.length; i++) {
//     if(cars[i].year < 2010) {
//       document.write(cars[i].make + ", " + cars[i].model)
//     }
//   }

// Greet User by Name //

// var username = prompt("What's your name?")
//   if(username == "Ashley") {
    // alert("Hello " + username + " so good to see you!")
//   } else {
//     document.write("Go to hell " + username + "!")
//   }

// getElementById //

// document.getElementById("message").innerHTML = content;

// function conjunctionFunction() {
//     document.getElementById("demon").innerHTML = "Check it Before ya Wreck it"
// }

// PASSWORDS ARE BACKWARDS //
// function getInfo() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var age = document.getElementById("age").value;
//     document.write("you username is " + username + " and your password is "
//     + password + "and you're " + age + " years old!")
// }

// LOOPING ARRAYS CAUSE THEY'RE SO CRAY CRAYS //

// var cars = ["fiat", "benz", "honda", "toyota"]
//
// for(i = 0; i < cars.length; i++) {
//     if(cars[i] = "benz") {
//     console.log("You're driving a sweet " + cars[i])
// }
// }

// var arr = [10, 55, 22, 87, 14]
// var biggest = 0
//   for(i = 0; i < arr.length; i++) {
//     if(biggest < arr[i]) {
//       biggest = arr[i]
//
//     }
//   }
//
//   console.log(biggest)

// creating objects //
// var cars = [
//   {
//     make: "honda",
//     model: "civic",
//     year: 2014,
//     color: "blue"
//   },
//
//   {
//     make: "toyota",
//     model: "rav4",
//     year: 2015,
//     color: "red"
//   },
//     {
//     make: "ford",
//     model: "mustang",
//     year: 2009,
//     color: "silver"
//     }
// ]
// console.log(cars[0].make)

// var objPeople = [
//   {
//     username: "Josue",
//     password: "Bacon"
//   },
//   {
//     username: "Irene",
//     password: "Pizza"
//   },
//   {
//     username: "Fatima",
//     password: "Tacos"
//   }
//   ]
//
// function getInfo() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   document.write("You're username is " + username + " and your password is " + password);
//
//   for(i = 0; i < objPeople.length; i++) {
//     if(username == objPeople[i].username && password == objPeople[i].password) {
//       document.write(" " + username + " is logged in!!!");
//       return
//
//   }
//
//   } document.write("Incorrect username or password")
//  }
// var content = "crip 4 life"
// document.getElementById("crip").innerHTML = content

// function getInfo() {
//    var username = document.getElementById("username").value
//    var password = document.getElementById("password").value
//    document.write("your username is " + username + " and your password is" + password)
// }


// USERNAME AND PASSWORD //

// var objPeople = [
//   {
//     username: "Josue",
//     password: "Tacos"
//     },
//     {
//       username: "Lola",
//       password: "Pizza"
//     },
//     {
//       username: "Fatima",
//       password: "Beer"
//     }
// ]
//
// function getInfo() {
//   var username = document.getElementById("username").value
//   var password = document.getElementById("password").value
//   for(var i = 0; i < objPeople.length; i++) {
//     if(username == objPeople[i].username && password == objPeople[i].password) {
//       console.log(username + " is logged in!!!")
//     }
//   }
//   }

// Counting to 100 from 0 by 5's //
for (var i = 0; i <= 100; i += 5){

  document.write(i);
}

// Saving user data to a variable //
var burgatory = document.getElementById('burger').innerHTML = "In & Out Sucks"

// Saving user input with input box, button and console //
function getInfo() {
  var userinfo = document.getElementById('userinfo').value
  console.log("The info you typed is the following: " + userinfo)
}

// CREATING OBJECT WITH 4 QUALITIES //

var objStuff = [
  {
    animal: "dolphin",
    color: "grey",
    texture: "slick",
    demeanor: "disenfranchised"
  },
  {
    animal: "chipmunk",
    color: "brown",
    texture: "furry",
    demeanor: "snarky"
  },
  {
    animal: "tardigrade",
    color: "olive",
    texture: "rough",
    demeanor: "adorable"
  }
]

// DISPLAYING THE OBJECTS //
document.getElementById("animals").textContent = objStuff[0].animal
document.getElementById("animals").textContent = objStuff[1].demeanor
document.getElementById("animals").textContent = objStuff[2].color
