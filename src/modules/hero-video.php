<?php 

function hero_video( $args = array() ) {     
    $args = array_merge( array(
        'title' => 'Page Title',
        'subtitle' => 'Tag Line Goes Here',
        'text_classes' => 'large-14 large-offset-10'
    ), $args );
    extract( $args );
?>
<div class="hero-video">
    <div class="hero-video-text row-fill">
        <div class="columns <?php echo $text_classes; ?>">
            <h1 class="title"><?php echo $title; ?></h1>
            <p class="subtitle">
                <?php echo $subtitle; ?>
            </p>
            <div id="actions">
                <ul class="button-group">
                    <li>
                        <div id="fs-wistia-play" class="button">Play Video</div>
                    </li>
                    <li data-magellan-expedition data-magellan-arrival="main">
                        <a class="button secondary" href="#main">Learn More</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="hero-video-img">
        <img src="img/bgimg-ps-specialty-classes.jpg">
    </div>
    <div class="hero-video-bg"> 
        <iframe id="vimeoplayer" src="https://player.vimeo.com/video/122377196?autoplay=1&loop=1&title=0&byline=0&portrait=0&api=1&player_id=vimeoplayer" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <div class="hero-video-feature" data-wistia-id="upuuu76nzq">
    </div>
</div>
<?php } ?>
