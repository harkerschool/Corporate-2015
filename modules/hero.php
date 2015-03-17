<?php 

function video_container( $args = array() ) {     
    $args = array_merge( array(
        'bgvideo' => '', 
        'fvideo' => '',
        'title' => 'Some Text Here',
        'subtitle' => 'Some Text Here',
        'text_classes' => 'large-14 large-offset-10'
    ), $args );
    extract( $args );
?>
<div id="video_container" data-bgvideo="<?php echo $bgvideo; ?>" data-fvideo="<?php echo $fvideo; ?>">
    <div id="text">
        <div class="text-wrapper columns <?php echo $text_classes; ?>">
            <h1 class="title"><?php echo $title; ?></h1>
            <p class="subtitle">
                <?php echo $subtitle; ?>
            </p>
            <div id="actions">
                <ul class="button-group">
                    <?php if ( $fvideo ) : ?>
                    <li>
                        <div id="button-play" class="button">Play Video</div>
                    </li>
                    <?php endif; ?>
                    <li data-magellan-expedition data-magellan-arrival="main">
                        <a class="button secondary" href="#main">Learn More</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="cover_all">
    </div>
    <div id="main-image">
    </div>
    <?php if ( $bgvideo ) : ?>
    <div id="wistia_<?php echo $bgvideo; ?>" class="wistia_embed backgroundVideo" style="width:920px;height:518px;">
    </div>
    <?php endif; ?>
    <?php if ( $fvideo ) : ?>
    <div id="wistia_<?php echo $fvideo; ?>" class="wistia_embed overlayVideo" style="width:1920px;height:1080px;">
    </div>
    <?php endif; ?>
    <div id="ex">
        <i class="fa fa-2x fa-times" style="color:white;text-shadow:0 1px 2px rgba(0,0,0,0.3);"></i>
        <!-- <img src="img/ex.svg" width="23" height="23"/> -->
    </div>
</div>
<?php } ?>
