var window_width = window.innerWidth * 1.5;
var window_height = window.innerHeight * 1.5;
var drop_count = window_width*0.2;

// Convenience function for getting random int
function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function makeItRain() {
  for( i = 0 ; i < drop_count; i++) {
    var dropLeft = random(0,window_width);
    var dropTop = random(-1000,window_height-1000);

    $('.rain').append('<div class="raindrop" id="raindrop'+i+'"></div>');
    $('#raindrop'+i).css('left',dropLeft);
    $('#raindrop'+i).css('top',dropTop);
    $('#raindrop'+i).css('animation-duration', random(1000, 2000) + 'ms');
  }
}

makeItRain();