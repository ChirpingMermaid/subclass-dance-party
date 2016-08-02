var dancingFish = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  
  this.moves = ['style1', 'style2', 'style3'];
  //this.$node.removeClass('dancer');
  this.timeBetweenSteps = timeBetweenSteps;
  this.fish = ['images/destiny.png', 'images/dory.png', 'images/hank.png', 'images/nemo.png', 'images/starfish.png'];
  var choice = this.fish[Math.floor(Math.random() * this.fish.length)];
  
  makeDancer.call(this, top, left, timeBetweenSteps, 'fish');
  this.$node.attr('src', choice);
  //this.oldStep = makeDancer.prototype.step;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
  //this.oldStep = this.step;
  //return blinkyDancer;
};

dancingFish.prototype = Object.create(makeDancer.prototype);
dancingFish.prototype.constructor = dancingFish;

dancingFish.prototype.step = function() {
  //console.log(this);
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep = makeDancer.prototype.step;
  var randomNum = Math.floor(Math.random() * 3);
  console.log("inside fish step: ",this);
  var randomMove = this.moves[randomNum];
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass(randomMove);
};