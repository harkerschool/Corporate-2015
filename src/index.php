<?php 
    include "modules/header.php";
    include "modules/footer.php";
    include "modules/hero.php"; 
    include "modules/hero-video.php";
?>
<?php 
    the_header();
    hero_video();
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