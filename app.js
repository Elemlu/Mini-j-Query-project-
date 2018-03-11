
$(document).ready(function(){
  
    var userName = prompt("Please enter your name:");
    alert("Welcome To mozart " + userName + ". we are interessted in coding ;)");
    
    $('#Form').submit(function(event){
      event.preventDefault();
      var color = $('#Color').val();
      $('body').css('background-color', color);
    });

    $('.text').on('click',function() {
        var color2 = $('.color2').val();
        $('p').css('color',color2);
    });
  
    $('#button').click(function(event){
      event.preventDefault();
      $('#hide').toggle();
    }); 
  
    $('#removeForm').submit(function(event){
      event.preventDefault();
      $('#remove').remove();
    });

    $(".btn1").click(function(){
        $("p").slideUp();
    });
    $(".btn2").click(function(){
        $("p").slideDown();
    });

    
    
  });