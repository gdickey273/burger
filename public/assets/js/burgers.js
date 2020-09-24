$(function() {
  $(".devour-button").click(function(event){
    console.log("click!");
    event.preventDefault();
    event.stopPropagation();
    let id = $(this).data("id");
    
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(function(){
      console.log("updated!")
      location.reload();
    }
    )
  })


  $(".new-burger-form").submit(function(event){
    let newBurger = {
      name : $("#burger-name-input").val().trim(),
      devoured: 0
    };

    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      console.log("created burger!");
      location.reload();
    })
  })
})