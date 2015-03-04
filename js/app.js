// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  "magellan-expedition": {
    destination_threshold: 72, // pixels from the top of destination for it to be considered active
    offset_by_height: false // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
  }
});

// Wistia Fullscreen Video
var fullScreenVideo = fullScreenVideo || {};

fullScreenVideo = {
    name: 'fullScreenVideo',
    /**
     * CHANGE THESE VARIABLES TO YOUR VIDEOS
     * overlayVideo: The video in the overlay
     * overlayVideoDiv: The jQuery selector of the div containing the overlay video
     * backgroundvideo: The video in the backgorund
     * backgroundvideoDiv: The jQuery selector of the div containing the background video
     */
    overlayVideo: 'ponntrph3v',
    overlayVideoDiv: '#wistia_ponntrph3v',
    backgroundvideo: 'fjkmntoo9w',
    backgroundvideoDiv: '#wistia_fjkmntoo9w',
    
    /**
     * This will call Wistia and embed the two videos
     * @param None
     */
    embedVideo: function()
    {
      var videoOptions = {};
  
      // Add the crop fill plugin to the videoOptions
      Wistia.obj.merge(videoOptions, {
        plugin: {
          cropFill: {
            src: "//fast.wistia.com/labs/crop-fill/plugin.js"
          }
        }
      });

      // Video in the background
      wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundvideo, videoOptions);
      // Video to be shown in the overlay
      overlayEmbed = Wistia.embed(fullScreenVideo.overlayVideo, videoOptions);

      /**
       * We load the thumbnail in the background while we wait
       * for the video to load and play. Once loaded, we pause, reset to 
       * frame zero, show the video then play it.
       */
      wistiaEmbed.bind("play", function(){
        wistiaEmbed.pause();
        wistiaEmbed.time(0);
        $(fullScreenVideo.backgroundvideoDiv).css('visibility', 'visible');
        wistiaEmbed.play();
        return this.unbind;
      });
    },
    /**
     * Plays the video set as overlayEmbed
     * @param None
     */
    playVideo: function()
    {
      $(fullScreenVideo.overlayVideoDiv).css("left", 0).css("visibility", "visible");
      overlayEmbed.plugin.cropFill.resize();
      $("#video_container").css({ position: "fixed", top: 0, left: 0 });
      $("#text").css({ opacity: 0 });
      $("#ex").css("right", 24);
      overlayEmbed.play();
    },
    /**
     * Hide the overlay video and pause it. Also reshow 
     * the text on the page.
     * @param None
     */
    exitVideo: function()
    {
      $(fullScreenVideo.overlayVideoDiv).css("left", -3000).css("visibility", "hidden");
      $("#video_container").css({ position: "relative", top: "auto", left: "auto" });
      $("#ex").css("right", -3000);
      $("#text").css({ opacity: 1 });
      overlayEmbed.pause();
      overlayEmbed._keyBindingsActive = false;
    },
    /**
     * Fix the size of the images and text on page
     * @param None
     */
    fixTextPosition: function()
    {
      var width = $( window ).width();
      var height = $( window ).height();
      textWidth = $("#text").width();
      textHeight = $("#text").height();
      $("#video_container").css("width", width).css("height", height);
      $("#main-image").css("width", width).css("height", height);
      $("#text").css("left", (width/2) - (textWidth/2)).css("top", (height/2) - (textHeight/2));
    }
     
}

/**
 * When the doc is ready, fix the video and images sizes
 * then display the text on the page.
 */
$(document).ready(function() {
  // initiate fullscreen video
  fullScreenVideo.fixTextPosition();
  $("#text").delay(200).animate({ opacity: 1 }, 650);

  // bind click callback to accordion links
  $('.accordion').on('click', '.accordion-direct-link', function(){
    var url = $(this).attr('href');
    document.location = url;
  });
});

// If the widow is resized, resize the videos
$(window).resize(fullScreenVideo.fixTextPosition);

// When the play button is clicked, call the play function
$("#button-play").click(fullScreenVideo.playVideo);

// When the "X" is clicked, exit the video
$("#ex").click(fullScreenVideo.exitVideo);

// Start loading the video
fullScreenVideo.embedVideo();