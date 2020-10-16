$(document).ready(function(){
    let buttons = $('.btn');
    //add click events
    $(buttons).each(function(){
        $(this).click(function(){
            var sound_file = $(this).data('sound');
            console.log(sound_file);
        });
    });
});