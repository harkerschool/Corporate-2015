<?php function the_header( $title = 'Web Redesign Template', $class = '' ) { ?>
<!DOCTYPE html>
<html lang="en" class="<?php echo $class; ?>">
<head>
<meta charset="UTF-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title><?php echo $title; ?></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="css/styles-1.css">
<link rel="stylesheet" type="text/css" href="css/styles-2.css">
<style type="text/css">
</style>
<script src="bower_components/modernizr/modernizr.js"></script>
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="js/vendor/bower.js"></script>
<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script>
<script src="js/vendor/truncated-menu.js"></script>
<script src="js/vendor/wp-json-feed.js"></script>
<script src="js/vendor/fullscreen-background.js"></script>
<script src="js/vendor/fullscreen-wistia.js"></script>
<script src="js/vendor/harker.js"></script>
<script src="js/main.js"></script>
<!--[if lte IE 9 ]>
<script>
(function($){
    $(window).load(function() {
        $('.mm-navbar').on('click', function() {
            $('.mm-panel').removeClass('mm-current').removeClass('mm-opened');
        });
    });
})(jQuery);
</script>
<![endif]-->
</head>
<body>
<div id="page">
    <header id="header" class="header">
        <div class="row">
            <div class="column">
                <nav class="header-nav">
                    <div class="harker-logo"><a href="http://www.harker.org">The Harker School</a></div>
                    <ul class="header-nav-menu header-nav-menu-secondary">
                        <li class="menu-item-search"><a href="#" title="Search"></a></li>
                        <li class="menu-item-login"><a href="#" title="Login"></a></li>
                    </ul>
                    <ul class="header-nav-menu header-nav-menu-sections">
                        <li class="menu-item-hamburger"><a href="#global-nav" title="Menu"><span class="menu-item-text">Menu</span></a></li>
                        <li><a href="#">Admission</a></li>
                        <li><a href="#">Preschool</a></li>
                        <li><a href="#">Lower School</a></li>
                        <li><a href="#">Middle School</a></li>
                        <li><a href="#">Upper School</a></li>
                        <li><a href="#">Summer</a></li>
                        <li class="menu-item-more">
                            <a href="#h-more-sections" data-dropdown="h-more-sections" aria-controls="h-more-sections" aria-expanded="false"><span>More</span></a>
                            <ul id="h-more-sections" class="f-dropdown" data-dropdown-content aria-hidden="true">
                                <li class="more-sections-item"><a href="/about">About</a></li>
                                <li class="more-sections-item"><a href="/news">News</a></li>
                                <li class="more-sections-item"><a href="/alumni">Alumni</a></li>
                                <li class="more-sections-item"><a href="/giving">Giving</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <?php include "search-box.php" ?>
<?php } ?>