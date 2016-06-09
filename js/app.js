$(document).ready(function() {

    $('.ryu, .hulk-ryu').mouseenter(function() {
        activate('ryu-ready', $(this));
    })
        .mouseleave(function() {
            activate('ryu-still', $(this));
        })
        .mousedown(function() {
            playHadouken();
            activate('ryu-throwing', $(this));
            throwHadouken($(this));
        })
        .mouseup(function() {
            activate('ryu-ready', $(this));
        });

    $(document).keydown(function(event) {
        if (event.which == 88)
            activate('ryu-cool', $(this), true); 
    })
        .keyup(function() {
            activate(active_class, $(this));
        });

});

var active_class = 'ryu-still';

function activate(class_to_activate, elem, temporary = false) {
    $('.ryu-image', elem).each(function() {
        if ($(this).hasClass(class_to_activate)) {
            $(this).show();
            if (!temporary)
                active_class = class_to_activate;
        } else {
            $(this).hide();
        }
    });
}

function throwHadouken(elem) {
    var left;
    var dest;
    var opponent;

    if (elem.attr('class') == 'ryu') {
        left = '500px';
        dest = '920px';
        opponent = 'hulk-ryu';
        impact_dir = 'left';
        $('.hadouken').css('left', left); // set start position
        $('.hadouken').removeClass('flipped'); // set direction
    } else {
        left = '1020px';
        dest = '270px';
        opponent = 'ryu';
        impact_dir = 'right';
        $('.hadouken').css('left', left);
        $('.hadouken').addClass('flipped');
    }
    $('.hadouken').finish().show().animate(
        {'left': dest},
        500,
        function() {
            if (opponent == 'hulk-ryu') {
                $(this).parent().animate({'padding-right': '0px'},50);
                $(this).parent().animate({'padding-right': '10px'},50);
            } else {
                $(this).parent().animate({'padding-left': '0px'},50);
                $(this).parent().animate({'padding-left': '10px'},50);
            }
            $(this).hide();
        }
    );
}

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}