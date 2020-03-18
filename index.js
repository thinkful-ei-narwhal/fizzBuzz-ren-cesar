'use strict';

function fizzBuzz() {
  $('button').click(function(event) {
    event.preventDefault();
    let outPut = $('input').val();
    console.log(outPut);

    if (outPut % 15 === 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
      );
    } else if (outPut % 5 === 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'
      );
    } else if (outPut % 3 === 0) {
      $('.js-results').append(
        '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'
      );
    } else {
      $('.js-results').append(`<div class="fizz-buzz-item">
       <span>${outPut}</span>
     </div>`);
    }
  });
}

$(fizzBuzz);
