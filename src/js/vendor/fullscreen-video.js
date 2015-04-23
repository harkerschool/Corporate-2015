;
(function($, window, document, undefined) {

    "use strict";

    var pluginName = "fullscreenVideo",
        defaults = {
            overlayVideo: '',
            backgroundVideo: ''
        },
        wistiaEmbed = {},
        overlayEmbed = {};

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);

        this.settings.overlayVideo = ($(element).data('fvideo')) ? $(element).data('fvideo') : this.settings.overlayVideo;
        this.settings.backgroundVideo = ($(element).data('bgvideo')) ? $(element).data('bgvideo') : this.settings.backgroundVideo;
        this.settings.overlayVideoDiv = '#wistia_' + this.settings.overlayVideo;
        this.settings.backgroundVideoDiv = '#wistia_' + this.settings.backgroundVideo;

        this._defaults = defaults;

        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {

            var plugin = this;

            $(document).ready(function() {
                // When the doc is ready, fix the video and images sizes
                // then display the text on the page.
                plugin.fixTextPosition();
                $("#text").delay(200).animate({
                    opacity: 1
                }, 650);
            });

            // When the window is resized, resize the fullscreen videos
            $(window).resize(this.fixTextPosition);

            // When the play button is clicked, call the play function
            $("#button-play").click({settings : this.settings}, this.playVideo);

            // When the "X" is clicked, exit the video
            $("#ex").click({settings : this.settings}, this.exitVideo);

            // // Start loading the video
            this.embedVideo(this.settings);
        },
        /**
         * This will call Wistia and embed the two videos
         * @param None
         */
        embedVideo: function(settings) {
            var videoOptions = {};

            // Add the crop fill plugin to the videoOptions
            Wistia.obj.merge(videoOptions, {
                plugin: {
                    cropFill: {
                        src: "//fast.wistia.com/labs/crop-fill/plugin.js"
                    }
                }
            });

            if (settings.backgroundVideo !== '') {
                // Video in the background
                wistiaEmbed = Wistia.embed(settings.backgroundVideo, videoOptions);
            }

            if (settings.overlayVideo !== '') {
                // Video to be shown in the overlay
                overlayEmbed = Wistia.embed(settings.overlayVideo, videoOptions);
            }

            /**
             * We load the thumbnail in the background while we wait
             * for the video to load and play. Once loaded, we pause, reset to 
             * frame zero, show the video then play it.
             */
            wistiaEmbed.bind("play", function() {
                wistiaEmbed.pause();
                wistiaEmbed.time(0);
                $(settings.backgroundVideoDiv).css('visibility', 'visible');
                wistiaEmbed.play();
                return this.unbind;
            });
        },
        /**
         * Plays the video set as overlayEmbed
         * @param None
         */
        playVideo: function(event) {
            $(event.data.settings.overlayVideoDiv).css("left", 0).css("visibility", "visible");
            overlayEmbed.plugin.cropFill.resize();
            $("#video_container").css({
                position: "fixed",
                top: 0,
                left: 0
            });
            $("#text").css({
                opacity: 0
            });
            $("#ex").css("right", 24);
            overlayEmbed.play();
        },
        /**
         * Hide the overlay video and pause it. Also reshow 
         * the text on the page.
         * @param None
         */
        exitVideo: function(event) {
            $(event.data.settings.overlayVideoDiv).css("left", -3000).css("visibility", "hidden");
            $("#video_container").css({
                position: "relative",
                top: "auto",
                left: "auto"
            });
            $("#ex").css("right", -3000);
            $("#text").css({
                opacity: 1
            });
            overlayEmbed.pause();
            overlayEmbed._keyBindingsActive = false;
        },
        /**
         * Fix the size of the images and text on page
         * @param None
         */
        fixTextPosition: function() {
            var width = $(window).width();
            var height = $(window).height();
            var textWidth = $("#text").width();
            var textHeight = $("#text").height();
            $("#video_container").css("width", width).css("height", height);
            $("#main-image").css("width", width).css("height", height);
            $("#text").css("left", (width / 2) - (textWidth / 2)).css("top", (height / 2) - (textHeight / 2));
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);