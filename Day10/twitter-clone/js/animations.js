$(document).ready(function(){
  var tweetControls = $('#tweet-controls');
  var localTweets = [];
  if (localStorage.getItem('tweets')) {
    localTweets = JSON.parse(localStorage.getItem('tweets'));
    console.log(localTweets);
    for (var i = 0; i < localTweets.length; i++) {
      tweetIt(localTweets[i]);
    }
  }

  var tweetStats = $('.stats');
  var tweetRep = $('.reply');

  tweetStats.hide();
  tweetRep.hide();

  tweetControls.hide();

  $('.tweet-compose').on('click', function(){
    $(this).height('65px');
    tweetControls.show();

  });

  // $('#dashboard').focusout(function(){
  //   $('.tweet-compose').height('32.5px');
  //   tweetControls.hide();
  //   console.log(tweetControls);
  // });

  $('.tweet-compose').keyup(function(){
    count = 140 - $(this).val().length;
    $('#char-count').text(count);
    if (count > 10) {
      $("#char-count").css('color', '#999');
      $("#car-count").show();
    }
    else if (count >= 0) {
      $('#char-count').css('color', 'red');
      $('#tweet-submit').prop('disabled', false);
      $('#char-count').show();

    }
    else {
      $('#tweet-submit').prop('disabled', true);
      $('#char-count').hide();
    }
  });


    // $('#tweet-submit').mousedown(tweetIt());
  // $('tweet-submit').mousedown(function(){
  //   $("#stream").append('<div class="tweet">Hi my name is brack</div>');
  // });

  function tweetIt(birdShit) {
    if (birdShit) {
      var newTweet = $('#tweet-content .tweet-compose').val();
      var tweetClone = $('.tweet:first').clone();
      console.log(tweetClone);
      $('#stream').prepend($('.tweet:first').clone());
      $('.tweet:first .content .tweet-text').text(birdShit.text);
      $('.tweet:first .content .avatar').attr('src', birdShit.avatar);
      $('.tweet:first .content .fullname').text(birdShit.fullname);
      $('.username:first').text(birdShit.username);
      $('.tweet:first .content .stats .time:first').text(jQuery.timeago(new Date()));
      return;
    }
    $('#tweet-submit').on('click', function(e){
      var newTweet = $('#tweet-content .tweet-compose').val();
      var tweetClone = $('.tweet:first').clone();
      console.log(tweetClone);
      $('#stream').prepend($('.tweet:first').clone());
      $('.tweet:first .content .tweet-text').text(newTweet);
      $('.tweet:first .content .avatar').attr('src', 'img/skeletor.jpg');
      $('.tweet:first .content .fullname').text('Skeletor');
      $('.username:first').text('@Skeletor');
      $('.tweet:first .content .stats .time:first').text(jQuery.timeago(new Date()));
      var currentTweet = {
        username: '@Skeletor',
        text: newTweet,
        avatar: 'img/skeletor.jpg',
        fullname: 'Skeletor'
      };
      localTweets.push(currentTweet);
      localStorage.setItem('tweets', JSON.stringify(localTweets));

      showTweet();
      hideTweet();
    });

  };

  tweetIt();
  function showTweet(){
      $('.tweet').click(function(){
      $(this).find('.stats').show(function(){
        $(this).slideDown();
      });
      $(this).find('.reply').show(function(){
        $(this).slideDown();
      });

    });}

    function hideTweet(){
      $('.tweet').mouseleave(function(){
        $(this).find('.stats').hide(function(){
          $(this).slideUp();
        });
        $(this).find('.reply').hide(function(){
          $(this).slideUp();

        });
      });}

showTweet();

hideTweet();


});
