<?php 
    include "modules/header.php";
    include "modules/footer.php";
    include "modules/hero.php";
?>
<?php the_header(); ?>
<main id="main" data-magellan-destination="main">
    <?php
        hero( array(
            'title' => '<span class="title-division">Middle School</span> <span class="title-topic">Programs & Extraccuriculars</span>',
            'subtitle' => 'Learn by Exploring.',
            'text_classes' => 'large-12 large-offset-12',
            'img_src' => 'img/placeholders/bgimg-ps-specialty-classes.jpg', // background image
            'img_alt' => ''
            // 'vimeo_id' => '122377196', // background video
            // 'wistia_id' => 'ponntrph3v' // feature video
        ));
        include "modules/nav.php";
        include "modules/intro.php";
        include "modules/stats.php";
        // include "modules/tabs.php";
        include "modules/text-photo-right.php";
        include "modules/three-column.php";
        include "modules/text-photo-left.php";
        include "modules/two-column.php";
        include "modules/text-photo-left-alt.php";
        include "modules/accordion-list.php";
        // include "modules/accordion-list-fs.php";
        // include "modules/text-columns.php";
        include "modules/features.php";
        include "modules/base.php";
    ?>
</main>
<?php the_footer(); ?>