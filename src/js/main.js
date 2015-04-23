(function($){
    $(document).ready(function() {

        var vimeoPlayer = ( $('#vimeoplayer').length ) ? $f( $('#vimeoplayer')[0] ) : false,
            wistiaID = $('.hero-video-feature').data('wistia-id'),
            wistiaHTML = '<div id="wistia_' + wistiaID + '" class="wistia_embed">&nbsp;</div>',
            exitLinkHTML = '<a href="#" id="fs-wistia-exit" title="Exit Video"><i class="fa fa-2x fa-times"></i></a>';

        // Add CSS handles to indicate when Vimeo background video is playing
        if ( vimeoPlayer ) {
            vimeoPlayer.addEvent('ready', function() {
                var $container = $('.hero-video-bg').addClass('is-playing');

                vimeoPlayer.addEvent('pause', function() {
                    $container.removeClass('is-playing');
                });
            });
        }

        // Set up fullscreen background video and image
        $('.hero-video-bg iframe').cover({
            cropBottom: 60,
            img: '.hero-video-img img'
        });

        // Set up Wistia's fullscreen video plugin
        $('#video_container').fullscreenVideo();

        // Set up Wistia feature video
        if ( $('.hero-video-feature').length ) {
            $('.hero-video-feature').append(exitLinkHTML + wistiaHTML);
            Wistia.fsembed(wistiaID, {
                container: '.hero-video-feature'
            });
        }

        // Set up Foundation
        $(document).foundation({
            "magellan-expedition": {
                destination_threshold: 72, // pixels from the top of destination for it to be considered active
                offset_by_height: false // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
            },
            accordion: {
                multi_expand: true
            }
        });
        
        // Set up WordPress JSON API Feed
        $('.news-feed').WPFeed({
            method : 'get_posts'
        });

        // Override Foundation's click callback for direct links.
        // $('.accordion').on('click', '.accordion-direct-link', function(){
        //     var url = $(this).attr('href');
        //     document.location = url;
        // });
    });
})(jQuery);
