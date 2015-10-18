$.fn.blink = function(seconds) {
  var selector = this;
  blinker(seconds, selector);
};


function blinker(seconds, selector){
  window.setInterval(function() {
    selector.toggle();
  }, seconds);
}
