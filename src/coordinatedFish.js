var coordinatedFish = function(top, left, timeBetweenSteps) {
  this.top = top
  this.left = left;
  this.oldStep = makeDancer.prototype.step;
  this.moves = ['style1', 'style2', 'style3'];
  this.timeBetweenSteps = timeBetweenSteps;
  this.fish = ['images/destiny.png', 'images/dory.png', 'images/hank.png', 'images/nemo.png', 'images/starfish.png'];
  var choice = this.fish[Math.floor(Math.random() * this.fish.length)];
  makeDancer.call(this, top, left, timeBetweenSteps, 'coordfish');
  this.$node.attr('src', choice);
  this.school = [];
  this.distance = [];
  this.findNeighbors(2);
};

coordinatedFish.prototype = Object.create(makeDancer.prototype);
coordinatedFish.prototype.constructor = coordinatedFish;

coordinatedFish.prototype.step = function() {
  
  var randomNum = Math.floor(Math.random() * 3);

  var randomMove = this.moves[randomNum];
  this.oldStep();
  this.$node.toggleClass(randomMove);
 
};
// change top for value closest fish to same move only
coordinatedFish.prototype.findNeighbors = function(value) {
  for (var i=0; i < (Math.min(value,window.dancers.length)); i++) {
    // calculate distance, save to array, sort array

    var y = Math.abs(window.dancers[i].top-this.top);
    var x = Math.abs(window.dancers[i].left-this.top);
    var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    this.distance.push(dist);
    this.school.push = [dist, window.dancers[i]];
  }
  this.distance.sort();
  for (var j=0; j < value; j++) {
    for (var k=0; k < this.school.length; k++) {
      /*if (this.school[k][0] == this.distance[j]) {
        fish.setPosition(this.top, this.left);
      }*/
      var xPosition = this.top;
      var yPosition = this.school[k].left;
      this.school[k].$node.animate({ top: xPosition, left: yPosition }, 1000);
    }
  }
};
