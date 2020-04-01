var HandsomeSquidward = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="squidward"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

};

HandsomeSquidward.prototype = Object.create(makeDancer.prototype);
HandsomeSquidward.prototype.constructor = HandsomeSquidward;

HandsomeSquidward.prototype.step = function() {
  makeDancer.prototype.step();

};