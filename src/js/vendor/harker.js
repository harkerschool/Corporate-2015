// Set up scope
var hkr = {};

// Google Analytics functions
hkr.ga = {
    /**
     * Function that tracks a click on an outbound link in Google Analytics.
     * This function takes a string as an argument, and uses it
     * as the event label. The string can be the anchor text or URL.
     */
    trackOutboundLink: function(url, label) {
        url = typeof url !== 'undefined' ? url : '';
        label = typeof label !== 'undefined' ? label : url;

        ga('send', 'event', 'outbound', 'click', label, {
            'hitCallback': function() {
                document.location = url;
            }
        });
    }
};

hkr.foundation = {
    init: function() {

        // Initialize Foundation
        $(document).foundation({
            "magellan-expedition": {
                destination_threshold: 48, // pixels from the top of destination for it to be considered active
            },
            accordion: {
                multi_expand: true
            }
        });

        // Override Foundation's click callback for direct links.
        $('.accordion').on('click', '.accordion-direct-link', function() {
            var url = $(this).attr('href');
            document.location = url;
        });

    }
};

hkr.hero = {
    init: function() {
        var vimeoPlayer = ($('#vimeoplayer').length) ? $f($('#vimeoplayer')[0]) : false,
            wistiaID = $('.hero-feature').data('wistia-id'),
            wistiaHTML = '<div id="wistia_' + wistiaID + '" class="wistia_embed">&nbsp;</div>',
            exitLinkHTML = '<a href="#" id="fs-wistia-exit" title="Exit Video"><i class="fa fa-2x fa-times"></i></a>',
            $heroBg = $('.hero-bg'),
            $heroBgIframe = $('iframe', $heroBg),
            $heroFeature = $('.hero-feature');

        // Add CSS handles to indicate when Vimeo background video is playing
        if (vimeoPlayer) {
            vimeoPlayer.addEvent('ready', function() {
                vimeoPlayer.addEvent('play', function() {
                    $heroBg.addClass('is-playing');
                });
                vimeoPlayer.addEvent('pause', function() {
                    $heroBg.removeClass('is-playing');
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
    }
};

hkr.navbar = {
    init: function() {
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
                $(document).foundation('dropdown', 'reflow');
            }
        });
        $('.current-page-menu-bookmarks').truncatedMenu({
            moreItem: '.current-page-menu-bookmarks .menu-item-more',
            afterTruncate: function() {
                $(document).foundation('dropdown', 'reflow');
            }
        });

        if (!Modernizr.touch) {
            new Waypoint.Sticky({
                element: navBar[0],
                stuckClass: 'is-stuck',
                wrapper: '<div class="nav-bar-wrapper" />'
            });

            hkr.helpers.scroll(handleDown, handleUp);
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
    }
};

hkr.news = {
    init: function() {
        // Set up WordPress JSON API Feed
        $('.news-feed').WPFeed({
            method: 'get_posts'
        });
    }
};

hkr.helpers = {
    scroll: function(handleDown, handleUp) {
        handleDown = typeof handleDown === "function" ? handleDown : function() {};
        handleUp = typeof handleUp === "function" ? handleUp : function() {};

        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var currentScrollTop = $(this).scrollTop();
            if (currentScrollTop > lastScrollTop) {
                handleDown();
            } else {
                handleUp();
            }
            lastScrollTop = currentScrollTop;
        });
    }
};