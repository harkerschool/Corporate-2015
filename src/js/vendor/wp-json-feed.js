(function($) {

    // Replaces selected element's content with a WordPress feed.

    $.fn.WPFeed = function( options ) {
		
		var container = this,
            html = '',
            settings = $.extend( true, {
                domain: 'http://news.harker.org',
                method: 'get_recent_posts',
                args: { 
                    count: 3,
                    date_format: 'F j, Y',
                    include: "id,title,title_plain,url,content,thumbnail"
                },
                container: 'ul',
                errorMsg: 'Read about what\'s happening at Harker in <a href="http://news.harker.org" target="_blank">Harker News</a>.',
                success: function() {}
            }, options),
            inlineOptions = container.data('wpargs') ===  undefined ? {} : container.data('wpargs');

        settings.args = $.extend( true, settings.args, inlineOptions);

        if ( container.length === 0 ) {
            return;
        }

        $.ajax({
            url: settings.domain + '?json=' + settings.method,
            dataType: 'jsonp',
            data: settings.args,
            cache: true,
            timout: 10000,
            success: function(data) {
                var posts = get_posts(data);
                if ( posts ) {
                    createHTML(posts); // create HTML for feed
                    container.html(html); // replace container's content with feed
                } else {
                    container.html('<p>' + errorMsg + '</p>');
                }
                settings.success();
            },
            error: function() {
                container.html('<p>' + errorMsg + '</p>');
            }
        });

        function get_posts(data) {

            var posts = {};

            // check if posts exist
            if ( data.hasOwnProperty("posts") ) {
                posts = data.posts;
            }
            else if ( data.hasOwnProperty('post') ) {
                posts = data.post;
            }
            else {
                console.error("'posts' or 'post' property was not found in JSON response.");
                return false;
            }

            return posts;

        }

        function createHTML(posts) {

            if ( settings.container === 'ul' )
                html += '<ul';
            else if ( settings.container === 'div' )
                html += '<div';

            html += ' class="wp-feed">';

            $.each( posts, function(index, post) {

                if ( settings.container === 'ul' )
                    html += '<li';
                else if ( settings.container === 'div' )
                    html += '<div';

                html += ' class="wp-article ' + 'post-' + post.id + '">';

                if ( post.thumbnail )
                    html += '<div class="wp-article-image"><img src="' + post.thumbnail + '" /></div>';
                
                html += '<h3 class="wp-article-title"><a href="' + post.url + '" target="_blank">' + post.title_plain + '</a></h3>';

                if ( post.date )
                    html += '<div class="wp-article-date">Posted ' + post.date + '</div>';
                
                if ( post.excerpt )
                    html += '<p class="wp-article-excerpt">';
                else if ( post.content ) 
                    html += '<div class="wp-article-excerpt">';
                
                if ( post.excerpt )
                    html += post.excerpt + '</p>';
                else if ( post.content ) 
                    html += post.content + '</div>';

                html += '</div>';

                if ( settings.container === 'ul' )
                    html += '</li>';
                else if ( settings.container === 'div' )
                    html += '</div>';

            });

            if ( settings.container === 'ul' )
                html += '</ul>';
            else if ( settings.container === 'div' )
                html += '</div>';

        }

    };
	
})(jQuery);