<?php 

function hero( $args = array() ) {     
    $args = array_merge( array(
        'title' => 'Page Title',
        'subtitle' => 'Tag Line Goes Here',
        'text_classes' => 'large-14 large-offset-10',
        'img_src' => 'http://dummyimage.com/1440x1200/4d494d/686a82.gif&text=placeholder+image', // background image
        'img_alt' => 'Placeholder Image',
        'vimeo_id' => '', // background video
        'wistia_id' => '' // feature video
    ), $args );
    extract( $args );
?>
<div id="hero" class="hero">
    <div class="hero-text">
        <div class="row-fill">
            <div class="columns <?php echo $text_classes; ?>">
                <h1 class="title"><?php echo $title; ?></h1>
                <p class="subtitle">
                    <?php echo $subtitle; ?>
                </p>
                <div id="actions" data-magellan-expedition="actions">
                    <ul class="button-group">
                        <?php if ( $wistia_id ): ?>
                        <li>
                            <div id="fs-wistia-play" class="button">Play Video</div>
                        </li>
                        <?php endif; ?>
                        <li data-magellan-arrival="bookmark-intro">
                            <a class="button secondary" href="#bookmark-intro">Learn More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-img hero-fixed">
        <img src="<?php echo $img_src; ?>" alt="<?php echo $img_alt; ?>">
    </div>
    <?php if ( $vimeo_id ): ?>
    <div class="hero-bg hero-fixed" data-vimeo-id="<?php echo $vimeo_id; ?>"> 
    </div>
    <?php endif; ?>
    <?php if ( $wistia_id ): ?>
    <div class="hero-feature hero-fixed" data-wistia-id="<?php echo $wistia_id; ?>">
    </div>
    <?php endif; ?>
</div>
<?php } ?>
