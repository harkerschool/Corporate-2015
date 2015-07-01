<?php function the_footer($is_home = false) { ?>
<footer class="section footer <?php if ( $is_home ) { echo 'footer-short'; } ?>">
<div class="row">
    <div class="column">
        <?php if ( ! $is_home ): ?>
        <p class="harker-logo harker-logo-horiz"><a href="http://www.harker.org">The Harker School</a></p>
        <nav class="footer-nav">
            <ul class="footer-nav-menu row">
                <li class="column large-5 medium-8">
                    <a href="#">Preschool</a>
                    <ul>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Specialty Classes</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Support &amp; Services</a></li>
                        <li><a href="#">Campus &amp; Facilities</a></li>
                        <li><a href="#">School Community</a></li>
                    </ul>
                </li>
                <li class="column large-5 medium-8">
                    <a href="#">Lower School</a>
                    <ul>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Programs &amp; Extracurriculars</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Support &amp; Services</a></li>
                        <li><a href="#">Campus &amp; Facilities</a></li>
                        <li><a href="#">School Community</a></li>
                    </ul>
                </li>
                <li class="column large-5 medium-8">
                    <a href="#">Middle School</a>
                    <ul>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Programs &amp; Extracurriculars</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Support &amp; Services</a></li>
                        <li><a href="#">Campus &amp; Facilities</a></li>
                        <li><a href="#">School Community</a></li>
                    </ul>
                </li>
                <li class="column large-5 medium-8">
                    <a href="#">Upper School</a>
                    <ul>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Programs &amp; Extracurriculars</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Support &amp; Services</a></li>
                        <li><a href="#">Campus &amp; Facilities</a></li>
                        <li><a href="#">School Community</a></li>
                    </ul>
                </li>
                <li class="column large-4 medium-8 end">
                    <ul>
                        <li><a href="#">Admission</a></li>
                        <li><a href="#">Summer</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Alumni</a></li>
                        <li><a href="#">Giving</a></li>
                        <li><a href="#">Portal</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <?php endif; ?>
        <p class="footer-legal">Copyright &copy; 1893-2015 &bull; The Harker School &bull; San Jose, CA 95129 <span class="footer-contact-link">| <a href="page.cfm?p=93" target="_self">Contact Us</a> | <a href="/page.cfm?p=3686" data-page-name="Privacy Policy">Privacy Policy</a></span></p>
    </div>
</div>
</footer>
<?php include "nav-global.php"; ?>
</body>
</html>
<?php } ?>