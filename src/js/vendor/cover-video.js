;
(function($, window, document, undefined) {

    "use strict";

    var pluginName = "cover",
        defaults = {
            aspectRatio : 16/9,
            cropBottom : 0,
            img : '',
            ready : function() {}
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;

        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            var theWindow = $(window),
                $video = $(this.element),
                $img = $(this.settings.img);

            // bind resize event handler                                              
            theWindow.resize({
                theWindow : theWindow,
                video : $video,
                img : $img,
                settings : this.settings
            }, this.resizeVideo).trigger("resize");

            this.settings.ready();
        },
        // resize video iframe to fill the screen
        resizeVideo: function(event) {
            var windowWidth = event.data.theWindow.width(),
                windowHeight = event.data.theWindow.height(),
                $video = event.data.video,
                $img = event.data.img,
                aspectRatio = event.data.settings.aspectRatio,
                crop = event.data.settings.cropBottom,
                newWidth = '', newHeight = '',
                topOffset = '', leftOffset = '',
                styles = {};
            
            if ( (windowWidth / windowHeight) < aspectRatio ) {
                // video doesn't fill vertical space
                // increase video width and crop left/right
                // newWidth / windowHeight = 16/9
                newWidth = windowHeight * aspectRatio;
                leftOffset = -((newWidth-windowWidth)/2); // center align

                if ( crop ) {
                    // increase video height to crop bottom of video and hide controls
                    newHeight = windowHeight + crop;
                    newWidth = newHeight * aspectRatio;
                    topOffset = 0;
                } 

            } else {
                // video doesn't fill horizontal space
                // increase video height and crop top/bottom
                // windowWidth / newHeight = 16/9
                newHeight = windowWidth / aspectRatio;
                topOffset = -((newHeight-windowHeight)/2); // center align

                if ( crop ) {
                    if ( (newHeight-windowHeight) < crop ) {
                        // video is not tall enough to crop
                        // increase video height to crop bottom of video and hide controls
                        newHeight = windowHeight + crop;
                        newWidth = newHeight * aspectRatio;
                        topOffset = 0;
                        leftOffset = -((newWidth-windowWidth)/2); // center align
                    } else if ( Math.abs(topOffset) < crop ) {
                        // video is not tall enough to vertically center
                        topOffset = 0;
                    }
                }

            }

            styles = {
                'display' : 'block',
                'width' : newWidth,
                'height' : newHeight, 
                'top' : topOffset,
                'left' : leftOffset
            };

            // update elements
            $img.css(styles).addClass('is-resized');  
            $video.css(styles).addClass('is-resized');     
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