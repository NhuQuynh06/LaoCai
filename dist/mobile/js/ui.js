"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ----------------------------------
// INFO : Unchangeable
// ----------------------------------

// INFOR : for header
$('.site-header .hamburger').click(function () {
  $('.search-wrapper').css('display', 'none');
  $('.navigation').slideToggle("slow");
  $('body').toggleClass('no-scroll');
});
$('.site-header .wrap-search').click(function () {
  $('.navigation').css('display', 'none');
  $('.search-wrapper').slideToggle("slow");
  $('body').toggleClass('no-scroll');
});
$('.navigation .mask').click(function () {
  $('.navigation').slideToggle("slow");
  $('body').toggleClass('no-scroll');
});
$('.search-wrapper .mask').click(function () {
  $('.search-wrapper').slideToggle("slow");
  $('body').toggleClass('no-scroll');
});
$('.navigation .ic-down1').click(function (e) {
  e.preventDefault();
  $(e.target).toggleClass("ic-up");
  var parent = $(e.target).parent();
  var subMenu = parent.siblings()[0];
  $(subMenu).slideToggle("");
});

// INFO : for check gif img
var img = $(".story .story__thumb img");
$.each(img, function () {
  var dataSrc = this.dataset.src;
  if (dataSrc) {
    if (dataSrc.slice(-4) === ".gif") {
      $(this).closest("figure").css("background", "#eee");
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
  setTimeout(function () {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $('.modal-backdrop').fadeOut();
  $('.modal').fadeOut();
});
$('.modal-backdrop').on('click', function () {
  setTimeout(function () {
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
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});

// ----------------------------------
// INFO : Js for project, be changed
// ----------------------------------
$(".breadcrumbs .ic-down3").click(function (e) {
  e.preventDefault();
  $(".breadcrumbs .sub").slideToggle();
});
$('.topics').slick(_defineProperty({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  speed: 1000,
  autoplaySpeed: 8000,
  arrows: false
}, "dots", false));
$('.suggest .box-content').slick(_defineProperty({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 8000,
  arrows: false
}, "dots", false));
$('.slide .box-content').slick({
  infinite: true,
  variableWidth: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000
});