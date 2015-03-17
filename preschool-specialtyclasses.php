<?php 
    include "header.php";
    include "footer.php";
    include "modules/hero.php"; 
?>
<?php 
    the_header('Preschool Specialty Classes');
    video_container( array(
        'bgvideo' => 'fa3kbm70ic',
        'title' => 'Preschool<br>Specialty Classes',
        'subtitle' => 'Learn by Exploring.'
    ));
?>
<main id="main" data-magellan-destination="main">
    <div class="section">
        <div class="row">
            <div class="column large-12 large-centered">
                <h1>Preschool<br>Specialty Classes</h1>
                <p class="subheader">Learn by Exploring.</p>
                <div class="">
                    <p>Our specialty classrooms are rich with activity centers and educational materials in each particular subject area, and offer a balance between child-directed exploratory learning and teacher-directed activities in large and small groups.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section green-bg section-collapse">
        <div class="row">
            <div class="column medium-12 rhythm-padding-2">
                <h2>Art Studio</h2>
                <p>A wide variety of media and materials are available for creative expression through art. Children are invited to paint, work with clay, develop pencil skills, and gain a greater ability to observe the world around them. Our outdoor art area adds to the experience, as children engage in creative expression in conjunction with sun, water, leaves and the natural world.</p>
            </div>
            <div class="column medium-11 medium-offset-1 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
        </div>
    </div>
    <div class="section red-bg section-collapse">
        <div class="row">
            <div class="column medium-11 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
            <div class="column medium-12 medium-offset-1 rhythm-padding-2 end">
                <h2>Music &amp; Movement</h2>
                <p>Physical development is as important to the young child as any other area of learning. Music and creative movement experiences help children gain strength, coordination, agility and a positive kinesthetic relationship with their physical bodies. Through dance, games, songs, rolling, sliding, jumping, marching and more, they enjoy and appreciate movement in many forms. Musical experiences, including simple instruments and rhythms, add joy and development in the music and movement room.</p>
            </div>
        </div>
    </div>
    <div class="section blue-bg section-collapse">
        <div class="row">
            <div class="column medium-12 rhythm-padding-2">
                <h2>STEM Lab</h2>
                <p> The STEM teacher works in collaboration with classroom teachers to introduce new concepts in the four important areas that comprise our STEM lab and farm.</p>
                <ul class="accordion accordion-invert small-block-grid-1 large-block-grid-2" data-accordion="areas">
                    <li class="accordion-navigation">
                        <a href="#science">Science</a> 
                        <div id="science" class="content">
                            <p>For <b>science</b>, children experience plant and animal life cycles through investigations in the lab and through gardening/animal care on the farm.</p>
                        </div>
                    </li>
                    <li class="accordion-navigation">
                        <a href="#technology">Technology</a> 
                        <div id="technology" class="content">
                            <p><b>Technology</b> is taught by the children learning that people use tools to accomplish different tasks, and they themselves use magnifying classes, thermometers, scales, rakes, hoes, shovels and a water pump.</p>
                        </div>
                    </li>
                    <li class="accordion-navigation">
                        <a href="#engineering">Engineering</a> 
                        <div id="engineering" class="content">
                            <p>Children have opportunities to learn <b>engineering</b> by making predictions, asking questions and investigating the physical properties of objects in order to solve problems related to cause and effect; this happens through the use of building blocks, ramps and balls, marble tracks, and other construction manipulatives.</p>
                        </div>
                    </li>
                    <li class="accordion-navigation">
                        <a href="#math">Math</a> 
                        <div id="math" class="content">
                            <p>Children experience and understand <b>math</b> through spatial relationships, shapes, patterns, comparisons, measurements and number concepts. This learning is through the use of pattern blocks, pattern beads, building blocks, sequencing activities, using measurement tools and sorting objects.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="column medium-11 medium-offset-1 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
        </div>
    </div>
    <div class="section navy-bg section-collapse">
        <div class="row">
            <div class="column medium-11 column-collapse">
                <img src="img/side-photo.jpg" alt="placeholder+image">
            </div>
            <div class="column medium-12 medium-offset-1 rhythm-padding-2 end">
                <h2>The Farm</h2>
                <p>The farm is an evolving space on our preschool campus! Raised garden beds hold vegetables, herbs, flowers and interesting plants of all kinds. Children learn how to care for plants and gain a practical and hands-on understanding of plant life. Composting vebetable and fruit scraps helps children form a more complete understanding of the entire life cycle of plants.</p>
                <p>Our farm is also home to our school pets! Chickens and rabbits provide special opportunities for learning responsibility through animal care but they also help instill empathy and a love of animals in their young caretakers. Our STEM lab specialists make use of the farm for hands-on science lessons in a perfect outdoor science classroom.</p>
            </div>
        </div>
    </div>
</main>
<?php the_footer(); ?>