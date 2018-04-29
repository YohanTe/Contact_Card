    $(document).ready(function(){
       
       
        $(document).on('click','button',function(){
            
            // $('body').append('heeh');  
            $('#box').append("<div class='newbox'>" + 
            
            "<h2>"+ $( "#firstname").val() + " " + $( "#lastname").val()+"</h2>" 
            
             + "</div>");
             
             $('.newbox').click(function(){ 
                $(this).append("<p>" + $( "#description").val() +"</p>");
                
           
            });

            

            
            
            
        })
    });
    