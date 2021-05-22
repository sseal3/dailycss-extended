var window_width = window.innerWidth * 1.5;
var window_height = window.innerHeight * 1.5;
var star_count = 500;

// Convenience function for getting random int
function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function letItShine() {
  for( i = 0 ; i < star_count; i++) {
    var starLeft = random(0,window_width);
    var starTop = random(0,window_height);
    var starSize = random(3,5);
    var opAmt = random(30,99) / 100;

    $('.stars').append('<div class="star" id="star'+i+'"></div>');
    $('#star'+i).css('left',starLeft);
    $('#star'+i).css('top',starTop);
   
    $('#star'+i).css('width', starSize + 'px');
    $('#star'+i).css('height', starSize + 'px');
    $('#star'+i).css('opacity',   opAmt);
   
  }
}

letItShine();