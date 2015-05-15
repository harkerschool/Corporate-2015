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
        url     = typeof url !== 'undefined' ? url : '';
        label   = typeof label !== 'undefined' ? label : url;

        ga('send', 'event', 'outbound', 'click', label, {
            'hitCallback': function () {
                document.location = url;
            }
        });
    }
};

hkr.scroll = function( handleDown, handleUp ) {
    handleDown = typeof handleDown === "function" ? handleDown : function(){};
    handleUp = typeof handleUp === "function" ? handleUp : function(){};

    var lastScrollTop = 0;
    $(window).scroll( function(event){
       var currentScrollTop = $(this).scrollTop();
       if (currentScrollTop > lastScrollTop){
           handleDown();
       } else {
          handleUp();
       }
       lastScrollTop = currentScrollTop;
    });
};
