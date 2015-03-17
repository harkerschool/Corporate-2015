<?php 
    include "header.php";
    include "footer.php";
    include "modules/hero.php"; 
?>
<?php 
    the_header('Lower School Students');
    video_container( array(
        'bgvideo' => '4fvhgvb00f',
        'title' => 'Lower School<br>Students',
        'subtitle' => 'Friendships for Life.',
        'text_classes' => 'large-14 large-offset-2'
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