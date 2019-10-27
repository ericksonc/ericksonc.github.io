document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper


  var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    duration = 3,

    // get page height from video duration
    // setHeight = document.getElementById("set-height"),
    // setHeight = 500,

    // select video element
    vid = document.getElementById('v0');


// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
//   vid.addEventListener('loadedmetadata', function () {
//     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//   });
  function roundNum(num) {
    return Math.round(num * 100) / 100
  }

// Use requestAnimationFrame for smooth playback
  function scrollPlay() {
    var viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    var viewportOffset = vid.getBoundingClientRect();

    // how far is top of video from bottom of frame:
    var top = viewportHeight - viewportOffset.top > 0 ? viewportHeight - viewportOffset.top : 0;


    var bottom = viewportOffset.bottom > 0 ? viewportOffset.bottom : 0;

    var pct = top / (top + bottom);
    var frameNumber = pct * duration;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    console.log("Pct: " + roundNum(pct) + "  frameNumber: " + roundNum(frameNumber) + " top: " + roundNum(top) + " bottom: " + roundNum(bottom) + " height: " + viewportHeight)
  }

  window.requestAnimationFrame(scrollPlay);

})
