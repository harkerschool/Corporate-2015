;
(function($, window, document, undefined) {

    "use strict";

    var pluginName = "coverVideo",
        defaults = {
            aspectRatio : 16/9
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.$video = $(this.element);
        this.$theWindow = $(window);

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;

        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            if ( ! this.$video.is('iframe') ) {
                console.log('Error: coverVideo requires an iframe to be selected.');
                return;
            }

            // bind resize event handler                                              
            this.$theWindow.resize({
                theWindow : $(window),
                video : $(this.element),
                settings : this.settings
            }, this.resizeVideo).trigger("resize");
        },
        // resize video iframe to fill the screen
        resizeVideo: function(event) {
            var windowWidth = event.data.theWindow.width(),
                windowHeight = event.data.theWindow.height(),
                $video = event.data.video,
                aspectRatio = event.data.settings.aspectRatio,
                newWidth, newHeight;
            
            if ( (windowWidth / windowHeight) < aspectRatio ) {
                // video doesn't fill vertical space
                // increase video width and crop left/right
                // newWidth / windowHeight = 16/9
                newWidth = windowHeight * aspectRatio;
                $video.css({
                    'width' : newWidth,
                    'height' : '', 
                    'top' : '',
                    'left' : -((newWidth-windowWidth)/2) // center align
                });
            } else {
                // video doesn't fill horizontal space
                // increase video height and crop top/bottom
                // windowWidth / newHeight = 16/9
                newHeight = windowWidth / aspectRatio;
                $video.css({
                    'width' : '',
                    'height' : newHeight,
                    'top' : -((newHeight-windowHeight)/2), // center align
                    'left' : ''
                });
            }
                        
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