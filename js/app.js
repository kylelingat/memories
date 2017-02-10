console.log('connected1')

//initalizing variables

var zero = document.getElementById("0");
var zerob = document.getElementById("b0");

var one = document.getElementById("1");
var oneb = document.getElementById("b1");

var two = document.getElementById("2");
var twob = document.getElementById("b2");

var three = document.getElementById("3");
var threeb = document.getElementById("b3");

var four = document.getElementById("4");
var fourb = document.getElementById("b4");

var five = document.getElementById("5");
var fiveb = document.getElementById("b5");

var six = document.getElementById("6");
var sixn = document.getElementById("b6");

var seven = document.getElementById("7");
var sevenb = document.getElementById("b7");

var cardsFlipped;
var time;
var temp = 0;
var tempb = 0;
var firstFlip = 0;
var secondFlip = 0;
var cardArray = [zero, one, two, three, four, five, six, seven];
var cardCount = document.querySelectorAll(".flipper").length;
//cardCount should be 8
//onclick event is located in index.html(inline)

//shuffling
function cardShuffle(){
  var to8 = []
  var foo = 0
  for (var i = cardCount; i > 0; i--) {
    foo++
    to8.push(foo);
    console.log(to8 + ' foo 8 loop') 
  }
  var randomizedCardArray = []
  for (var i = cardCount; i > 0; i--){
    shuffle = to8.splice(Math.floor(Math.random() * i), 1)[0];
    //using splice for randomizer
    randomizedCardArray.push(shuffle);
  }
  //using push methods
  console.log(randomizedCardArray + ' shuffled array')
  zero.style.order = randomizedCardArray[0];
  one.style.order = randomizedCardArray[1];
  two.style.order = randomizedCardArray[2];
  three.style.order = randomizedCardArray[3];
  four.style.order = randomizedCardArray[4];
  five.style.order = randomizedCardArray[5];
  six.style.order = randomizedCardArray[6];
  seven.style.order = randomizedCardArray[7];
}
//http://www.w3schools.com/jsref/prop_style_order.asp


//game start


//flip and point logic
function clickLogic(x) {
  
  if (x == 1) {
    temp = 1;
    firstFlip += 1;
    zero.classList.toggle('flipped');
    console.log('tempValue is ' + temp);
    console.log('firstFlipValue is ' + firstFlip);
  }
  
  if (x == 4) {
    tempb = 1;
    firstFlip += 1;
    four.classList.toggle('flipped');
    console.log('tempbValue is ' + tempb);
    console.log('firstFlipValue is ' + firstFlip);
  }

  
  if (x == 2) {
    temp = 2;
    firstFlip += 1;
    one.classList.toggle('flipped');
    console.log('tempValue is ' + temp);
    console.log('firstFlipValue is ' + firstFlip);
  }

  if (x == 5) {
    tempb = 2;
    firstFlip += 1;
    five.classList.toggle('flipped');
    console.log('tempValue is ' + temp);
    console.log('firstFlipValue is ' + firstFlip);
  }



  if (temp && tempb == 1) {
    zerob.style.opacity = "0.5";
    fourb.style.opacity = "0.5";
    temp = 0;
  }

  else if (temp && tempb == 2) {
    oneb.style.opacity = "0.5";
    fiveb.style.opacity = "0.5";
  }
}

