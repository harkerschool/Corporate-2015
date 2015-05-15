(function($) {
    $(document).ready(function() {

        var vimeoPlayer = ($('#vimeoplayer').length) ? $f($('#vimeoplayer')[0]) : false,
            wistiaID = $('.hero-feature').data('wistia-id'),
            wistiaHTML = '<div id="wistia_' + wistiaID + '" class="wistia_embed">&nbsp;</div>',
            exitLinkHTML = '<a href="#" id="fs-wistia-exit" title="Exit Video"><i class="fa fa-2x fa-times"></i></a>';

        // Add CSS handles to indicate when Vimeo background video is playing
        if (vimeoPlayer) {
            vimeoPlayer.addEvent('ready', function() {
                var $container = $('.hero-bg');

                vimeoPlayer.addEvent('play', function() {
                    $container.addClass('is-playing');
                });
                vimeoPlayer.addEvent('pause', function() {
                    $container.removeClass('is-playing');
                });
            });
        }

        // Set up fullscreen background video and image
        $('.hero-bg iframe').fullscreenVideo({
            cropBottom: 60,
            container: '.hero',
            img: '.hero-img img'
        });

        // Set up Wistia feature video
        if ($('.hero-feature').length) {
            $('.hero-feature').append(exitLinkHTML + wistiaHTML);
            Wistia.fsembed(wistiaID, {
                container: '.hero-feature'
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

        $('.primary-nav-menu-sections').truncatedMenu({
            visibleItems: '.primary-nav-menu-sections .active',
            moreItem: '.primary-nav-menu-sections .menu-item-more'
        });
        $('.current-page-menu-bookmarks').truncatedMenu({
            moreItem: '.current-page-menu-bookmarks .menu-item-more'
        });

        // Set up navigation bar behavior
        var navBar = $('.nav-bar'),
            handleUp = function() {
                // hide when user scrolls/swipes down
                if (!navBar.hasClass('is-collapsed') && navBar.hasClass('is-stuck')) {
                    navBar.addClass('is-collapsed');
                }
            },
            handleDown = function() {
                // show when user scrolls/swipes up
                if (navBar.hasClass('is-collapsed')) {
                    navBar.removeClass('is-collapsed').addClass('is-social');
                }
            };

        new Waypoint.Sticky({
            element: navBar[0],
            stuckClass: 'is-stuck',
            wrapper: '<div class="nav-bar-wrapper" />'
        });

        hkr.scroll(handleDown, handleUp);
        $(window).swipe({
            swipeDown: handleDown,
            swipeUp: handleUp
        });

        // Set up mmenu
        $("#global-nav").mmenu({
            offCanvas: {
                position: "left",
                zposition: "front"
            },
            navbars: true,
            extensions: ["pageshadow"]
        }, {
            // configuration
            offCanvas: {
                pageNodetype: 'main',
                pageSelector: '#main'
            },
            classNames: {
                fixedElements: {
                    fixed: "fixed"
                }
            }
        });

        var mmenu = $("#global-nav").data("mmenu");
        // somehow find list item to select
        mmenu.setSelected($('.global-nav-selected'));
        // somehow find panel to activate
        mmenu.openPanel($('#mm-16'));

        // Set up WordPress JSON API Feed
        $('.news-feed').WPFeed({
            method: 'get_posts'
        });

        // Override Foundation's click callback for direct links.
        $('.accordion').on('click', '.accordion-direct-link', function() {
            var url = $(this).attr('href');
            document.location = url;
        });
    });

})(jQuery);