$(document).ready(function() {
  var fit = $('body').height();
  $('.left-nav').css('height', fit + 'px');
  $(window).resize(function() {
    $('.left-nav').css('height', fit + 'px')
  });
  if ($(window).width() < 760) {
    $('.left-nav').addClass('inv')
  } else {
    $('.left-nav').removeClass('inv')
  }
  $(window).resize(function(){
    if ($(window).width() < 760) {
      $('.left-nav').addClass('inv')
    } else {
      $('.left-nav').removeClass('inv')
    }
  });
  $('.nav-tog').click(function() {
    $('.content').toggleClass('nomarg')
  });
  $('.nav-tog').click(function() {
    $('.left-nav').toggle(
      function() {
        $('.left-nav').animate({width: '0px'});
        $('.left-nav').addClass('inv');
      },
      function() {
        $('.left-nav').animate({width: '190px'});
        $('.left-nav').removeClass('inv');
      }
    )
  });
  $(window).bind('load', function() {
    $('.container').addClass('superanim');
  });
  var fullDate = new Date();
  console.log(fullDate);

  var twoDigitMonth =fullDate.getMonth() + '';
  if (twoDigitMonth.length == 1) twoDigitMonth = '0' + twoDigitMonth;
  var twoDigitDate = fullDate.getDate() + '';
  if (twoDigitDate.length == 1) twoDigitDate = '0' + twoDigitDate;

  var currentDate = twoDigitDate + '/' + twoDigitMonth + '/' + fullDate.getFullYear();
  console.log(currentDate);

  var i = 1;
  var postText = document.getElementById('text').value;
  $('#text').bind('input propertychange', function() {
    postText = document.getElementById('text').value;
    console.log(postText);
  });
  var postTitle = document.getElementById('title').value;
  $('#title').bind('input propertychange', function() {
    postTitle = document.getElementById('title').value;
    console.log(postTitle);
  })

  $('.send-btn').click(function() {
    if (postTitle && postText) {
      $('<h1 class="error superbitch">We will review this post.</h1>').appendTo('.put');
      setTimeout(() => {
        $('.error').fadeOut();
      }, 5000);
    }
  });

  $('.login').hide();
  $('.login-btn').click(function() {
    $('.login').toggleClass('superout');
    $('.login').toggleClass('superbitch');
    $('.login').fadeToggle(500);
  })
})