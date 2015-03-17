(function($){
    $(document).ready(function() {
        // Start Wistia's fullscreen video plugin
        $('#video_container').fullscreenVideo();
        
        // Start Fullscreen iframe video
        $('.hero-video iframe').coverVideo();
        
        // Start WordPress JSON API Feed
        $('.news-feed').WPFeed({
            method : 'get_posts'
        });

        // Bind click callback to Foundation accordion direct links
        $('.accordion').on('click', '.accordion-direct-link', function(){
            var url = $(this).attr('href');
            document.location = url;
        });
    });

    // Start Foundation
    $(document).foundation({
        "magellan-expedition": {
            destination_threshold: 72, // pixels from the top of destination for it to be considered active
            offset_by_height: false // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
        },
        accordion: {
            multi_expand: true
        }
    });
})(jQuery);
