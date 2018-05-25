$(window).scroll(function () {
    if ($(document).scrollTop() > window.innerHeight + 45) {
        $('.header-menu').addClass('show');
        $('#navbar').addClass('mob');
    }
    else if ($(document).scrollTop() > window.innerHeight - 45) {
        $('#navbar').addClass('change');
    }

    else {
        $('#navbar').removeClass('mob');
        $('.header-menu').removeClass('show');
        $('#navbar').removeClass('change');
    }
})


