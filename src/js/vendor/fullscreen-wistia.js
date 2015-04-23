;
(function($, window, document, undefined) {

    var defaults = {
            container : '#fs-wistia-container',
            playLink : '#fs-wistia-play',
            exitLink : '#fs-wistia-exit'
        };

    Wistia.fsembed = function(id, options) {
        var settings = $.extend({}, defaults, options),
            videoOptions = {},
            wistiaEmbed = {},
            $container = $(settings.container),
            $playLink = $(settings.playLink),
            $exitLink = $(settings.exitLink);

        // add the crop fill plugin to the videoOptions
        Wistia.obj.merge(videoOptions, {
            plugin: {
                cropFill: {
                    src: "//fast.wistia.com/labs/crop-fill/plugin.js"
                }
            }
        });

        wistiaEmbed = Wistia.embed(id, videoOptions);

        $playLink.click( function() {
            wistiaEmbed.plugin.cropFill.resize();
            wistiaEmbed.play();
            $container.addClass('is-playing');
        });
        $exitLink.click( function() {
            wistiaEmbed._keyBindingsActive = false;
            wistiaEmbed.pause();
            $container.removeClass('is-playing');
        });

        return wistiaEmbed;
    };

})(jQuery, window, document);