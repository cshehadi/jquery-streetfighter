$(document).ready(function() {

    $('.ryu').mouseenter(function() {
        activate('ryu-ready');
    })
        .mouseleave(function() {
            activate('ryu-still');
        })
        .mousedown(function() {
            playHadouken();
            activate('ryu-throwing');
            $('.hadouken').finish().show().animate(
                {'left': '1020px'},
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            );
        })
        .mouseup(function() {
            activate('ryu-ready');
        });

    $(document).keydown(function(event) {
        if (event.which == 88)
            activate('ryu-cool',true); 
    })
        .keyup(function() {
            activate(active_class);
        });

});

var active_class = 'ryu-still';

function activate(class_to_activate, temporary = false) {
    $('.ryu-image').each(function() {
        if ($(this).hasClass(class_to_activate)) {
            $(this).show();
            if (!temporary)
                active_class = class_to_activate;
        } else {
            $(this).hide();
        }
    });
}

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}