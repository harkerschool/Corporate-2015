(function($) {
    $(document).ready(function() {

        var $document = $(document),
            vimeoPlayer = ($('#vimeoplayer').length) ? $f($('#vimeoplayer')[0]) : false,
            wistiaID = $('.hero-feature').data('wistia-id'),
            wistiaHTML = '<div id="wistia_' + wistiaID + '" class="wistia_embed">&nbsp;</div>',
            exitLinkHTML = '<a href="#" id="fs-wistia-exit" title="Exit Video"><i class="fa fa-2x fa-times"></i></a>',
            $heroBg = $('.hero-bg'),
            $heroBgIframe = $('iframe', $heroBg),
            $heroFeature = $('.hero-feature');

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
        if ($heroBgIframe.length) {
            $heroBgIframe.fullscreenVideo({
                cropBottom: 60,
                container: '.hero',
                img: '.hero-img img'
            });
        }

        // Set up Wistia feature video
        if ($heroFeature.length) {
            $heroFeature.append(exitLinkHTML + wistiaHTML);
            Wistia.fsembed(wistiaID, {
                container: '.hero-feature'
            });
        }

        // Set up Foundation
        $document.foundation({
            "magellan-expedition": {
                destination_threshold: 48, // pixels from the top of destination for it to be considered active
            },
            accordion: {
                multi_expand: true
            }
        });

        // Set up navigation bar behavior
        var navBar = $('.nav-bar'),
            handleDown = function() {
                // hide when user scrolls/swipes down
                if (!navBar.hasClass('is-collapsed') && navBar.hasClass('is-stuck')) {
                    navBar.addClass('is-collapsed');
                }
            },
            handleUp = function() {
                // show when user scrolls/swipes up
                if (navBar.hasClass('is-collapsed')) {
                    navBar.removeClass('is-collapsed').addClass('is-social');
                }
            };

        $('.primary-nav-menu-sections').truncatedMenu({
            visibleItems: '.primary-nav-menu-sections .active',
            moreItem: '.primary-nav-menu-sections .menu-item-more',
            afterTruncate: function() {
                $document.foundation('dropdown', 'reflow');
            }
        });
        $('.current-page-menu-bookmarks').truncatedMenu({
            moreItem: '.current-page-menu-bookmarks .menu-item-more',
            afterTruncate: function() {
                $document.foundation('dropdown', 'reflow');
            }
        });

        if (!Modernizr.touch) {
            new Waypoint.Sticky({
                element: navBar[0],
                stuckClass: 'is-stuck',
                wrapper: '<div class="nav-bar-wrapper" />'
            });

            hkr.scroll(handleDown, handleUp);
        }

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
        mmenu.openPanel($('#mm-14'));

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