var window_width = window.innerWidth * 1.5;
var window_height = window.innerHeight * 1.5;
var snow_count = window_width*0.1;

// Convenience function for getting random int
function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function letItSnow() {
  for( i = 0 ; i < snow_count; i++) {
    var snowLeft = random(0,window_width);
    var snowTop = random(-1000,window_height-1000);
    var flakeSize = random(4,6);
    var opAmt = random(30,99) / 100;

    $('.snow').append('<div class="snowflake" id="snowflake'+i+'"></div>');
    $('#snowflake'+i).css('left',snowLeft);
    $('#snowflake'+i).css('top',snowTop);
   
    $('#snowflake'+i).css('width', flakeSize + 'px');
    $('#snowflake'+i).css('height', flakeSize + 'px');
    $('#snowflake'+i).css('opacity',   opAmt);
   
    $('#snowflake'+i).css('animation-duration', random(15000, 20000) + 'ms');
  }
}

letItSnow();