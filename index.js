'use strict';
// This event should cause the program to create the FizzBuzz sequence up to the number requested by the user.

// For each element in sequence insert an element into the .js-results div that looks like this:

// <div class="fizz-buzz-item">
//   <span>1</span>
// </div>

// If the element's content is the word "fizz", the div with .fizz-buzz-item should also get the class .fizz applied. So:

// <div class="fizz-buzz-item fizz">
//   <span>fizz</span>
// </div>
// If the element's content is the word "buzz" it should get the class ".buzz" applied:

// <div class="fizz-buzz-item buzz">
//   <span>buzz</span>
// </div>
// If its content is the word "fizzbuzz" it should get the class "fizzbuzz" applied:

// <div class="fizz-buzz-item fizzbuzz">
//   <span>fizzbuzz</span>
// </div>
// Your function should append the resulting HTML to the .js-results DOM element.

//1st get number from form
//2nd out put number on div
//form =  $('number-chooser')
//input = $('number-choice')
$('button').click(function(event) {
  event.preventDefault();
  let outPut = $('input').val();
  console.log(outPut);
  $('.js-results').append(outPut);
});
