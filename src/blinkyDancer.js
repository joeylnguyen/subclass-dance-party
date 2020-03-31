var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step; // = dancer.step

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};

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