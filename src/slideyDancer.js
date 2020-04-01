// Create Slidey class
var makeSlideyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

// Set slidey prototype to an object that delegates to dancer prototype
makeSlideyDancer.prototype = Object.create(makeDancer.prototype);
// Set slidey constructor to itself
makeSlideyDancer.prototype.constructor = makeSlideyDancer;

// Create set method that uses slide effect
makeSlideyDancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  var rightAnimate = function() {
    this.$node.animate({right: '+=20px'});
  };

  var bindedAnimate = rightAnimate.bind(this);

  this.$node.animate({left: '-= 25px'}, 400, 'swing', bindedAnimate);
  // this.$node.animate({right: '+= 5px'});


  var styleSettings = {
    border: '20px solid',
    color: 'green'
  };

  this.$node.css(styleSettings);
};