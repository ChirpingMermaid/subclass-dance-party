$(document).ready(function() {
  window.dancers = [];
  window.fishDancers = [];
  var backgrounds = ['images/ocean1.jpg', 'images/ocean2.jpg', 'images/ocean3.jpg'];
  var bkgd = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  $('body').attr('background', bkgd);

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  var hideFish = function(){
    $('img.fishies').off().on('mouseleave', function(event) {
      //console.log('test');
      $(this).hide();
      //$('body');
    });
  }

  $('.addFishButton').on('click', function(event) {
    //var fish = ['destiny.png', 'dory.png', 'hank.png', 'nemo.png'];
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var fish = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 2000
    );
    $('body').append(fish.$node);
    fishDancers.push(fish);
    hideFish();
  });

  $('.lineUp').on('click', function(event) {
      //fish.setPosition($("body").height() * 0.5, $("body").width() * 0.5);
      //what is $node??

      // var lineUp = function(top, left) {
      //   var styleSettings = {
      //     top: top
      //     //left: left
      //   };
      //   $('img').css(styleSettings);
      // };
      // lineUp($("body").height() * 0.5);
      var linePosition = $("body").height() * 0.5;
      // $('img').each(function() {
      //   $(this).swim(false);
      // });

      for (var i = 0; i < fishDancers.length; i++) {
        fishDancers[i].flag = false;
      }
      $('img').stop(true);
      $('img').animate({ top: linePosition }, 1000);
      
      
  });

  $('.scatter').on('click', function(event) {

    $('img').each(function(){
      var xPosition = $("body").height() * Math.random();
      var yPosition = $("body").width() * Math.random();
      $(this).animate({ top: xPosition, left: yPosition }, 1000);
    });
    for (var i = 0; i < fishDancers.length; i++) {
      fishDancers[i].flag = true;
    }
      
  });



});







