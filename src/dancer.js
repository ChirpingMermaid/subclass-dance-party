// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, type) {
  //this = Object.create(makeDancer.prototype);
  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  //dancer.$node = $('<span class="dancer"></span>');

  if (type === 'fish') {
    this.$node = $('<img src="" class="fishies">');
  } else {
    this.$node = $('<span class="dancer"></span>');
  }
  
  this.timeBetweenSteps = timeBetweenSteps;

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);
  this.setPosition(top, left);

  //return this;
  //return dancer;
};

makeDancer.prototype.step = function() {
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //'this' is an instance of makeBlinkyDancer
  setTimeout(function() {
    this.step(this.timeBetweenSteps);
  }.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};






