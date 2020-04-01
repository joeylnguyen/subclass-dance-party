// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step; // = dancer.step

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// When blinkydancer step is called, it will toggle our span tag
// It will also invoke the makeDancer step, which schedules the next step
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();

};




// // Create makeBlinkyDancer class
// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // Call makeDancer in the context of makeBlinkyDancer instance
//   makeDancer.call(this, top, left, timeBetweenSteps);


// };

// // Set prototype of makeBlinkyDancer equal to an object that is delegating to makeDancer's prototype
// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// // Set constructor of makeBlinkyDancer to itself
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// // Create method for step
// makeBlinkyDancer.prototype.step = function () {
//   // Use makeDancer.prototype.step to call old step
//   // makeDancer.prototype.step();
//   // Set invoke toggle function on makeBlinkyDancer's node

//   this.$node.toggle();
// };

// Create setPosition method
// makeBlinkyDancer.prototype.setPosition = function (top, left) {
//   makeDancer.prototype.setPosition(top, left);
// };





// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // this = Object.create(makeBlinkyDancer.prototype)
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   // Store the inherited step method
//   this.oldStep =
// };
// // Set prototype
// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// // Set constructor
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// // Create an old step method that uses the inherited step method
//   // var oldStep = this.step;
// // Create step method that uses the inherited step method
// makeBlinkyDancer.prototype.step = function() {
//   // Call the inherited step function
//   this.step();
//   // Then call toggle
//   this.$node.toggle();
// };