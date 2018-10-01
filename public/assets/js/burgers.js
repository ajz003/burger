$(document).on("click", ".burger-eater", function() {

    var id = $(this).data("id");

    console.log(id)

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("put burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );   

})

$("#burger-submit").on("click", function(e) {
    alert("test")
e.preventDefault();

var newBurger = {
    burger_name: $("#burger-input").val().trim()
}

$.ajax("/api/burgers/", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("POST burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );   



})