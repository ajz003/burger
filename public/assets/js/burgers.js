$(document).on("click", ".burger-eater", function () {

  var id = $(this).data("id");

  console.log(id)


  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(
    function () {
      console.log("put burger", id);

      location.reload();
    }
  );

})

$("#burger-submit").on("click", function (e) {

  e.preventDefault();

  var newBurger = {
    burger_name: $("#burger-input").val().trim()
  }

  $.ajax("/api/burgers/", {
    type: "POST",
    data: newBurger
  }).then(
    function (data) {
      console.log(data)
      if (data) {
        console.log("POST burger");

        location.reload();
      }

      else {
        alert("Please input a burger name.")
      }
    }
  );



})

$("#delete-all").on("click", function (e) {

  e.preventDefault();

  $.ajax("/api/burgers/delete", {
    type: "DELETE"
  }).then(
    function () {


      location.reload();

    });



})