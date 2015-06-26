$('document').ready(function(){
  var $video = $("video")[0],
        $playButton = $("#play-pause"),
        $muteButton = $("#mute"),
        $fullScreenButton = $("#full-screen"),
        $seekBar = $("#seek-bar"),
        $volumeBar = $("#volume-bar");

  $playButton.click(function() {
    if(video.paused == true) {
      video.play();
    } else {
      video.pause();
    }
  });
  $muteButton.click( function (){
     if( $video.prop('muted') ) {
           $video.prop('muted', false);
     } else {
       $video.prop('muted', true);
     }
   });
  $fullScreenButton.on('click',function(){
    if ($video.requestFullscreen) {
        $video.requestFullscreen();
    } else if ($video.msRequestFullscreen) {
        $video.msRequestFullscreen();
    } else if ($video.mozRequestFullScreen) {
        $video.mozRequestFullScreen();
    } else if ($video.webkitRequestFullscreen) {
        $video.webkitRequestFullscreen();
      }
  });

  $seekBar.change(function() {
      var time = video.duration * ($seekBar.val() / 100);
      video.currentTime = time;
    });

    $video.bind('timeupdate', function() {
      var value = (100 / video.duration) * video.currentTime;
      $seekBar.val(value);
    });

    $seekBar.mousedown(function() {
      video.pause();
    });

    $seekBar.mouseup(function() {
      video.play();
    });

    $volumeBar.change(function() {
      video.volume = $volumeBar.val();
    });
})
