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

})