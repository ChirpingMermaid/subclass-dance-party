$(document).ready(function() {
  window.dancers = [];
  var backgrounds = ['images/ocean1.jpg', 'images/ocean2.jpg', 'images/ocean3.jpg'];
  var bkgd = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  console.log(bkgd);
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
      Math.random() * 10000
    );
    $('body').append(dancer.$node);
  });

  $('.addFishButton').on('click', function(event) {
    //var fish = ['destiny.png', 'dory.png', 'hank.png', 'nemo.png'];

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
    var dancerMakerFunctionName1 = $(this).data('dancer-maker-function-name1');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction1 = window[dancerMakerFunctionName1];

    // make a dancer with a random position

    var dancer1 = new dancerMakerFunction1(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer1.$node);
  });
});

