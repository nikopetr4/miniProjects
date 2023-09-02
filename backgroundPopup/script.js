$(document).ready(function() {
    $('.btn').click(function() {
        $('.container').addClass('active');
        $('.popup-container').removeClass('active');
    })

    $('.close-icon').click(function() {
        $('.container').removeClass('active');
        $('.popup-container').addClass('active');
    })
});