console.log('connected1')

//initalizing variables

var zero = document.getElementById("0")
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6") 
var seven = document.getElementById("7")

var cardsFlipped;
var time;
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
    randomizedCardArray.push(shuffle);
  }
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


//game start


//flip and point logic

