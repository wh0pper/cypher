
$(document).ready(function() {

var input = prompt("Enter a sentence to be encoded:");

var firstLast = function(input1) {
  var first = input1.charAt(0).toUpperCase();
  var last = input1.charAt(input1.length -1).toUpperCase();
  return first + last;
  }

var reverse = function(input2) {
  return input2.charAt(input2.length-1) + input2.charAt(0);
}

var grab = function(input3) {
  var store1 = firstLast(input3);
  var store2 = reverse(store1);
  var store3 = input + store2;

  var i = 0;
  var newstring = "";
  while (i<store3.length) {
    var temp = store3.charAt(i);
    newstring = temp + newstring;
    i = i + 1;
  }
  return newstring;


  // var array1 = store3.split("");
  // return array1.reverse().join("");
}

$("#left").click(function() {
  alert(input)

});

$("#right").click(function() {
  alert(grab(input))

});

});
