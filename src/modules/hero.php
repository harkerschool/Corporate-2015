<?php 

function hero( $args = array() ) {     
    $args = array_merge( array(
        'title' => 'Page Title',
        'subtitle' => 'We challenge and support students with an innovative curriculum that encourages success in college and beyond.',
        'container_classes' => '',
        'text_classes' => 'large-14 large-offset-10',
        'img_src' => 'http://dummyimage.com/1440x1200/4d494d/686a82.gif&text=placeholder+image', // background image
        'img_alt' => 'Placeholder Image',
        'vimeo_id' => '', // background video
        'wistia_id' => '' // feature video
    ), $args );
    extract( $args );
?>
<div id="hero" class="hero <?php echo $container_classes; ?>">
    <div class="hero-text">
        <div class="row">
            <div class="columns <?php echo $text_classes; ?>">
                <div class="hero-title"><?php echo $title; ?></div>
                <div class="hero-subtitle">
                    <?php echo $subtitle; ?>
                </div>
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
