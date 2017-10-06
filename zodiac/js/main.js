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
      {
        sign: "taurus",
        fortune: "Intelling, Kind, Stoic, Informative",
        image: "img/taurus.jpg"
        },
        {
          sign: "gemini",
          fortune: "Bubbily, Meticulous, Driven, Productive",
          image: "img/gemini.jpg"
        },
        {
          sign: "leo",
          fortune: "Intense, Impulsive, Choosy, Composed",
          image: "img/leo.jpg"
        },
        {
          sign: "virgo",
          fortune: "Intelling, Kind, Stoic, Informative",
          image: "img/virgo.jpg"
        },
        {
          sign: "libra",
          fortune: "Bubbily, Meticulous, Driven, Productive",
          image: "img/libra.jpg"
        },
        {
          sign: "scorpio",
          fortune: "Intense, Impulsive, Choosy, Composed",
          image: "img/cancer.jpg"
        },
        {
          sign: "saggitarius",
          fortune: "Intelling, Kind, Stoic, Informative",
          image: "img/saggitarius.jpg"
          },
          {
            sign: "capricorn",
            fortune: "Bubbily, Meticulous, Driven, Productive",
            image: "img/capricorn.jpg"
          },
          {
            sign: "pisces",
            fortune: "Intense, Impulsive, Choosy, Composed",
            image: "img/pisces.jpg"
          }
     ]
function getHoroscope() {

  var userInput = document.getElementById("userInput").value;

    for(i = 0; i < zodiac.length; i++) {
      if(userInput == zodiac[i].sign) {
        document.write("Your zodiac sign is " + userInput)
      }
    }
  }


// if(signs == "aquarius") {
//   document.write("Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.")
// }


// FOR LOOP, NOT SURE IF THIS IS THE BEST MEANS //
    // for(i = 0; i < signs.length; i++) {
    // if(zodiac[i] = "aquarius") {
    //   document.write("Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.");
    // } else if(zodiac == sign[i].pisces) {
    //   document.write("Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.");
    // }
