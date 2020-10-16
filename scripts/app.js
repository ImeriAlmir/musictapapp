$(document).ready(function(){
    let buttons = $('.btn');
    //add click events
    $(buttons).each(function(){
        $(this).click(function(){
            var sound_file = $(this).parent().find('audio').first();
            sound_file.volume = 0.2;
            
            $(sound_file).trigger('play');
        });
    });
});