var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = this.$node || $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.step();
  // Invoke setPosition in the context of the subclass dancer
  this.setPosition(this.top, this.left);
};

// Add methods to Dancer prototype
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // setTimeout will be called in the context of the subclass dancer and it will create a function that will invoke the step function in the context of the subclass dancer
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
// Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// Create a method that makes all dancers line up horizontally
makeDancer.prototype.lineUp = function() {

  var width = $("body").width();

  if (this.left <= (width/2)) {
    this.left = 25;
  } else {
    this.left = width-75;
  }
  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.animate(styleSettings, this._delay);
};


