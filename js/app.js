$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
        $('.ryu-throwing').show();
        $('.ryu-ready').hide();
        $('.hadouken').show();
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});