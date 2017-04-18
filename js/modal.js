$(document).ready(function() {

    // #########################
    // ----- SIGN UP MODAL -----
    // #########################

    $(".signup-btn").click(function(){
          $( "#signup-modal" ).fadeIn( "fast", function() {});
    });
    $(".close").click(function(){
         $( "#signup-modal" ).fadeOut( "fast", function() {});
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById('signup-modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // #########################
    // ----- SIGN IN MODAL -----
    // #########################

    $(".signin-btn").click(function(){
          $( "#signin-modal" ).fadeIn( "fast", function() {});
    });
    $(".close").click(function(){
         $( "#signin-modal" ).fadeOut( "fast", function() {});
    });
});