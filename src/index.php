<?php 
    include "modules/header.php";
    include "modules/footer.php";
    include "modules/hero.php";
?>
<?php 
    the_header();
    hero( array(
        'title' => 'Preschool Specialty Classes',
        'subtitle' => 'Learn by Exploring.',
        'text_classes' => 'large-12 large-offset-12',
        'img_src' => 'img/placeholders/bgimg-ps-specialty-classes.jpg', // background image
        'img_alt' => '',
        'vimeo_id' => '122377196', // background video
        'wistia_id' => 'ponntrph3v' // feature video
    ));
?>
<main id="main" class="off-canvas-wrap" data-magellan-destination="main" data-offcanvas>
<div class="inner-wrap">
    <?php include "modules/nav.php"; ?>
    <div class="off-canvas-content">
    <?php
        include "modules/intro.php";
        include "modules/stats.php";
        include "modules/text-photo-right.php";
        include "modules/three-column.php";
        include "modules/text-photo-left.php";
        include "modules/two-column.php";
        include "modules/accordion-list.php";
        // include "modules/text-columns.php";
        include "modules/features.php";
        include "modules/base.php";
    ?>
    </div>
    <a class="exit-off-canvas"></a>
</div>
</main>
<?php the_footer(); ?>