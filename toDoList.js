//check of specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(Event){
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
   });
    Event.stopPropagation();
});

$("input[type='Text']").keypress(function(event){
   if(event.which == 13){
       //grabing new todo text from input
       var todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" +" "+ todoText + "</li>")
   } 
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});