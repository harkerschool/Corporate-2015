<?php 
    include "modules/header.php";
    include "modules/footer.php";
    include "modules/hero.php"; 
?>
<?php 
    the_header('Lower School Students');
    hero( array(
        'title' => 'Lower School Students',
        'subtitle' => 'Fostering Lifelong Friendships',
        'text_classes' => 'large-14 large-offset-10',
        'img_src' => 'img/bgimg-ps-specialty-classes.jpg', // background image
        'img_alt' => 'I\'m a Big Hero Image',
        'vimeo_id' => '122377196', // background video
        'wistia_id' => 'upuuu76nzq' // feature video
    ));
?>
<main id="main" data-magellan-destination="main">
<?php 
    include "modules/intro.php";
    include "modules/stats.php";
    include "modules/text-photo-right.php";
    include "modules/three-column.php";
    include "modules/two-column.php";
    include "modules/text-photo-left.php";
    include "modules/accordion-list.php";
    // include "modules/text-columns.php";
    include "modules/features.php";
    include "modules/base.php";
?>
</main>
<?php the_footer(); ?>