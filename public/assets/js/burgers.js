// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // $(".change-devour").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newDevour = $(this).data("devour");
  
    //   var newDevour = {
    //     sleepy: devour
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/devour/" + id, {
    //     type: "PUT",
    //     data: newDevour
    //   }).then(
    //     function() {
    //       console.log("changed burger to", newDevour);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $("#addBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  