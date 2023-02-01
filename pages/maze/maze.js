

/* $(document).ready(function(){
    setInterval(function(){
        $('#cycle').css("height", "+=10px");
        $('#cycle').css("width",   "+=10px");
    }, 250)
});
 */
$(document).ready(function(){
    $('#cycle').click(function(){
        $(this).remove();
    });  
});
