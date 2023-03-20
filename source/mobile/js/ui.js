// ----------------------------------
// INFO : Unchangeable
// ----------------------------------

// INFOR : for header
$('.site-header .hamburger').click(function () {
    $('.search-wrapper').css('display', 'none');
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.site-header .wrap-search').click(function () {
    $('.navigation').css('display', 'none');
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.navigation .mask').click(function () {
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.search-wrapper .mask').click(function () {
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})


// INFO : for check gif img
var img = $(".story .story__thumb img");
$.each(img, function () {
    var dataSrc = this.dataset.src;
    if (dataSrc) {
        if (dataSrc.slice(-4) === ".gif") {
            $(this).closest("figure").css(
                "background", "#eee"
            )
        }
    }
});

// INFO : for audio
$(".audio .right .select-voice").click(function (e) {
    e.preventDefault();
    $(".audio .right .voice-board").toggle();
});

$(".audio .play-button").click(function (e) {
    e.preventDefault();
    $(".audio .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".audio .mute-button").click(function (e) {
    e.preventDefault();
    $(".audio .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

$(".modal-body .ic-eye").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("slash");
});

// INFO : for modal
$("body").append("<div class='modal-backdrop'></div>");
$('.btn-modal').on('click', function () {
    $("body").addClass("modal-open");
    $('.modal-backdrop').fadeIn();
    var id = $(this).data('target');
    $('.modal[data-target="' + id + '"]').fadeIn();
    $(".navigation.sticky.fixed").addClass("show-modal");
});

$('.btn-close').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
        $(".navigation.sticky.fixed").removeClass("show-modal");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

$('.modal-backdrop').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
        $(".navigation.sticky.fixed").removeClass("show-modal");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

// back to top
var btn = $('.back-to-top');
$(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


