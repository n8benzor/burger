console.log("the javascript file is working")

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-burger").on("click", function(event) {
        console.log("button licked");
      let id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
  
      var newDevourState = {
        devoured: true
      };
    
      // Send the PUT request.
      $.ajax("/api/burgers/devoured/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed burger to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        name: $("#name").val().trim(),
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
        // res.redirect("/");
        }
      );
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  