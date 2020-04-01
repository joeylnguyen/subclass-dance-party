// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer" class="addDancerButton"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

// // Create makeDancer class that takes top, left, and timeBetweenSteps arguments
// var makeDancer = function(top, left, timeBetweenSteps) {
//   // Create a jQuery node property
//   this.$node = $('<span class="dancer" class="addDancerButton"></span>');
//   this.styleSettings = {
//     top: top,
//     left: left
//   };
// };

// // Create the step method
// makeDancer.prototype.step = function() {
//   setTimeout(this.step, timeBetweenSteps);
// };

// // Create set position method
// makeDancer.prototype.setPosition = function(top, left) {

//   this.$node.css(this.styleSettings);
// };


var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer" class="addDancerButton"></span>');

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

  var styleSettings = {
    top: '450px',

  };
  this.$node.css(styleSettings);
};


// var makeDancer = function(top, left, timeBetweenSteps) {
//   this.dancer = {};
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   this.step();
//   this.setPosition(top, left);
// };
// // Add methods to makeDancer prototype
// makeDancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(this.step, timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   this.styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };