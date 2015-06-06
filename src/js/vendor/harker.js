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
                destination_threshold: 24 + 96 + 48, // pixels from the top of destination for it to be considered active
                offset_by_height: false
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
        this.setupBgImage();
        this.setupBgVideo();
        this.setupFeatureVideo();
    },
    setupBgImage: function() {
        var $img = $('.hero-img > img');

        if ($img.length === 0) {
            return;
        }

        // Initiate fullscreen image
        $img.fsBackground({
            cropBottom: 60,
            container: '#hero'
        });
    },
    setupBgVideo: function() {
        var $videoContainer = $('.hero-bg'),
            vimeoID = $videoContainer.data('vimeo-id');

        if ($videoContainer.length === 0 || vimeoID === undefined) {
            return;
        }

        var vimeoHTML = '<iframe id="vimeoplayer" src="https://player.vimeo.com/video/' + vimeoID + '?autoplay=1&loop=1&title=0&byline=0&portrait=0&api=1&player_id=vimeoplayer" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            $video = $(vimeoHTML),
            vimeoPlayer = $f($video[0]);

        // Add CSS handles to indicate when Vimeo background video is playing
        if (vimeoPlayer) {
            vimeoPlayer.addEvent('ready', function() {
                vimeoPlayer.addEvent('play', function() {
                    $videoContainer.addClass('is-playing');
                });
                vimeoPlayer.addEvent('pause', function() {
                    $videoContainer.removeClass('is-playing');
                });
            });
        }

        // Add element and initiate fullscreen video
        $video.appendTo($videoContainer).fsBackground({
            cropBottom: 60
        });
    },
    setupFeatureVideo: function() {
        var $videoContainer = $('.hero-feature'),
            wistiaID = $videoContainer.data('wistia-id');

        if (wistiaID === undefined || typeof Wistia === 'undefined' || $videoContainer.length === 0) {
            $('#fs-wistia-play').remove();
            return;
        }

        var wistiaHTML = '<div id="wistia_' + wistiaID + '" class="wistia_embed">&nbsp;</div>',
            exitLinkHTML = '<a href="#" id="fs-wistia-exit" title="Exit Video"><i class="fa fa-2x fa-times"></i></a>';

        // Set up Wistia feature video
        $videoContainer.append(exitLinkHTML + wistiaHTML);
        Wistia.fsembed(wistiaID, {
            container: '.hero-feature',
            playLink: '#fs-wistia-play'
        });

    }
};

hkr.header = {
    init: function() {
        this.menu.init();
    },
    menu: {
        init: function() {
            var $menu = $('.header-nav-menu-sections');

            if ($menu.length === 0) {
                this.element = {};
                return this.element;
            }

            this.element = $menu;
            this.mediaQueries = this.getMediaQueries();

            $menu.truncatedMenu({
                moreItem: '.header-nav-menu-sections .menu-item-more',
                visibleItems: '.header-nav-menu-sections .header-hamburger',
                afterTruncate: function() {
                    $(document).foundation('dropdown', 'reflow');
                }
            });

            // this.mediaQueries();
            // $(window).on('resize.hkr', this.mediaQueries);
        },
        getMediaQueries: function() {
            var $menu = this.element;

            return function() {
                if (Foundation.utils.is_small_only()) {
                    $menu.data('plugin_truncatedMenu').truncateAll();
                    $menu.data('plugin_truncatedMenu').off();
                } else {
                    $menu.data('plugin_truncatedMenu').on();
                }
            };
        }
    }
};

// TODO: Delay reaction of scroll events
hkr.navbar = {
    init: function() {
        var $navBar = $('.nav-bar');

        if ($navBar.length === 0) {
            this.element = {};
            return this.element;
        }

        this.element = $navBar;
        this.sectionMenu.init();
        this.bookmarksMenu.init();
        this.globalNav.init();

        // set up scroll behavior for navbar
        if (!Modernizr.touch) {
            new Waypoint.Sticky({
                element: $navBar[0],
                stuckClass: 'is-stuck',
                wrapper: '<div class="nav-bar-wrapper" />'
            });

            hkr.helpers.scroll(this.getScrollHandle("down"), this.getScrollHandle("up"));
        } else {
            new Waypoint.Sticky({
                element: $('.current-page-bar')[0],
                stuckClass: 'is-stuck',
                wrapper: '<div class="current-page-bar-wrapper" />'
            });
        }

        $(window).load(function() {
            if (location.hash && $navBar.hasClass('is-stuck')) {
                // scroll up to reveal content behind fixed navbar
                scrollBy(0, $navBar.height() * -1 - 48);
            }
        });
    },
    getScrollHandle: function(direction) {
        var bookmarksMenu = this.bookmarksMenu,
            $navBar = this.element;

        if (direction === "down") {
            return function() {
                // hide when user scrolls/swipes down
                if (!$navBar.hasClass('is-collapsed') && $navBar.hasClass('is-stuck')) {
                    $navBar.addClass('is-collapsed');
                    if (bookmarksMenu.element.length) {
                        bookmarksMenu.mediaQueries();
                    }
                }
            };
        }

        if (direction === "up") {
            return function() {
                // show when user scrolls/swipes up
                if ($navBar.hasClass('is-collapsed')) {
                    $navBar.removeClass('is-collapsed').addClass('is-social');
                    if (bookmarksMenu.element.length) {
                        bookmarksMenu.mediaQueries();
                    }
                }
            };
        }
    },
    sectionMenu: {
        init: function() {
            var $sectionMenu = $('.primary-nav-menu-sections');

            if ($sectionMenu.length === 0) {
                this.element = {};
                return this.element;
            }

            this.element = $sectionMenu;

            $sectionMenu.truncatedMenu({
                visibleItems: '.primary-nav-menu-sections .active, .primary-nav-menu-sections .menu-item-hamburger',
                moreItem: '.primary-nav-menu-sections .menu-item-more',
                afterTruncate: function() {
                    $(document).foundation('dropdown', 'reflow');
                }
            });
        }
    },
    bookmarksMenu: {
        init: function() {
            var $bookmarksMenu = $('.current-page-menu-bookmarks');

            if ($bookmarksMenu.length === 0) {
                this.element = {};
                return this.element;
            }

            this.element = $bookmarksMenu;
            this.insertBookmarks();
            this.insertPageTitle();
            this.mediaQueries = this.getMediaQueries();

            $bookmarksMenu.truncatedMenu({
                moreItem: '.current-page-menu-bookmarks .menu-item-more, .current-page-menu-bookmarks .menu-item-hamburger',
                afterTruncate: function() {
                    $(document).foundation('dropdown', 'reflow');
                }
            });

            this.mediaQueries();
            $(window).on('resize.hkr', this.mediaQueries);
        },
        getMediaQueries: function() {
            var $bookmarksMenu = this.element;

            return function() {
                if (Foundation.utils.is_small_only()) {
                    $bookmarksMenu.data('plugin_truncatedMenu').truncateAll();
                    $bookmarksMenu.data('plugin_truncatedMenu').off();
                } else {
                    $bookmarksMenu.data('plugin_truncatedMenu').on();
                }
            };
        },
        insertBookmarks: function() {
            var $bookmarks = $('main').find('*[id^="bookmark-"]'),
                $bookmarksMenu = this.element,
                menuHTML = '';

            $bookmarks.each(function(i, el) {
                var $bookmark = $(this),
                    id = $bookmark.attr('id'),
                    text = '',
                    lengthMax = 20;

                if ($bookmark.data('bookmark-label') !== undefined) {
                    text = $bookmark.data('bookmark-label');
                } else {
                    text = $bookmark.text().trim();
                    if (text.length > lengthMax) {
                        text = text.substring(0, lengthMax).trim() + "&hellip;";
                    }
                }

                $bookmark.attr('data-magellan-destination', id);
                menuHTML += '<li data-magellan-arrival="' + id + '"><a href="#' + id + '">' + text + '</a></li>';
            });

            menuHTML += '<li class="menu-item-more">\n\t<a href="#more-bookmarks" data-dropdown="more-bookmarks" aria-controls="more-bookmarks" aria-expanded="false"><span>More</span></a>\n\t<ul id="more-bookmarks" class="f-dropdown" data-dropdown-content aria-hidden="true"></ul>\n</li>';

            $bookmarksMenu.html(menuHTML);
        },
        insertPageTitle: function() {
            var $pageTitle = $('.title'),
                $pageTopic = $pageTitle.children('.title-topic'),
                $navbarTitle = $('.current-page-title > a'),
                text = '';

            if ($pageTitle.data('nav-bar-title') !== undefined) {
                $pageTitle.data('nav-bar-title');
            } else {
                text = ($pageTopic.length) ? $pageTopic.text().trim() : $pageTitle.text().trim();
            }

            $navbarTitle.html(text);
        }
    },
    globalNav: {
        init: function() {
            var $globalNav = $(".global-nav nav");

            if ($globalNav.length === 0) {
                this.element = {};
                return this.element;
            }

            this.element = $globalNav;
            $globalNav.attr('id', 'global-nav');

            // Set up mmenu
            $globalNav.mmenu({
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

            var mmenu = $globalNav.data("mmenu");

            if (typeof mmenu !== "undefined") {
                // somehow find list item to select
                // mmenu.setSelected($('.global-nav-selected'));
                // // somehow find panel to activate
                // mmenu.openPanel($('#mm-14'));
            }
        }
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