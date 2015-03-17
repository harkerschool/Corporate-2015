<?php 
    include "header.php";
    include "footer.php";
    include "modules/hero.php"; 
?>
<?php 
    the_header('Preschool Academics');
    video_container( array(
        'bgvideo' => '2eq7hwy1ik',
        'fvideo' => 'ponntrph3v',
        'title' => 'Preschool Academics',
        'subtitle' => 'The Genius of Play.'
    ));
?>
<main id="main" data-magellan-destination="main">
    <div class="section">
        <div class="row">
            <div class="column large-16">
                <h1>Preschool Academics</h1>
                <p class="subheader">The Genius of Play.</p>
                <div class="medium-text-columns-2">
                    <p>We believe young children learn best through hands-on, interactive experiences and that broad and engaging opportunities are the key to their successful development. Our curriculum reflects a blend of the best methods and techniques designed to develop age-appropriate skills in language arts, math, science, art, music, and social and physical development, while honoring the wonder and joy of these formative years.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section green-bg section-collapse">
        <div class="row">
            <div class="column medium-12 rhythm-padding-2">
                <h2>Areas of Development</h2>
                <p>Our challenging and innovative curriculum focuses on three major areas of development, with placement tailored to ensure each student’s success:</p>
                <ul class="accordion accordion-invert small-block-grid-1 large-block-grid-2" data-accordion="areas">
                    <li class="accordion-navigation">
                        <a href="#social">Social &amp; Emotional</a> 
                        <div id="social" class="content">Establishes a solid foundation in the fundamentals of social communication, gaining autonomy, developing and regulating attention span, and building resiliency.</div>
                    </li>
                    <li class="accordion-navigation">
                        <a href="#physical">Physical</a> 
                        <div id="physical" class="content">Helps children build strength, agility and coordination in their small and large motor development.</div>
                    </li>
                    <li class="accordion-navigation">
                        <a href="#academic">Academic</a> 
                        <div id="academic" class="content">Establishes a solid foundation in literacy, math and critical thinking.</div>
                    </li>
                </ul>
            </div>
            <div class="column medium-11 medium-offset-1 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
        </div>
    </div>
    <div class="section">
        <div class="row">
            <div class="column large-12 large-centered">
                <h2>A Nurturing Learning Environment</h2>
                <p>We maintain a low student-teacher ratio and select <a href="#">passionate teachers who are experts in their fields</a>. Our program enables students to achieve their full potential through a balance of child- and teacher-directed activities, large- and small-group experiences, and indoor and outdoor adventures.</p> 
            </div>
        </div>
    </div>
    <div class="section red-bg section-collapse">
        <div class="row">
            <div class="column medium-11 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
            <div class="column medium-12 medium-offset-1 rhythm-padding-2 end">
                <h2>Our Teachers</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p><a class="button button-outline-invert" href="#">Learn more about our teachers</a></p>
            </div>
        </div>
    </div>
</main>
<?php the_footer(); ?>