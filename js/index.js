/// <reference types="../@types/jquery" />

$(".open-menu ").on("click", function () {
  $(".menu").animate({ width: "250px" }, 500);
  $(".home").animate({ marginLeft: "250px" }, 500);
});

$(".x-icon").on("click", function () {
  $(".menu").animate({ width: "0px" }, 500);
  $(".home").animate({ marginLeft: "0px" }, 500);
  

});

$(".singer h3").on("click", function (e) {
  $(".singer p").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

function countdownToSpecificDay(targetDate) {
  let countDownDate = new Date(targetDate).getTime();

  setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
      $(".days span").html("00");
      $(".hours span").html("00");
      $(".minutes span").html("00");
      $(".seconds span").html("00");
    } else {
      $(".days span").html(days);
      $(".hours span").html(hours);
      $(".minutes span").html(minutes);
      $(".seconds span").html(seconds);
    }
  }, 1000);
}
$(function () {
  countdownToSpecificDay("Oct 25, 2024 23:59:59");
});

$("#message").on("input", function () {
  const msgLength = 100;

  if ($(this).val().length <= 100) {
    $(".number").html(msgLength - $(this).val().length);
  } else {
    $(".number").html("your available character finished");
  }
});

$('a[href^="#"]').on("click", function () {
  const linkTarget = $(this).attr("href");
  const sectionPosition = $(linkTarget).offset().top;
  $("html,body").animate({ scrollTop: sectionPosition }, 1000);
});
