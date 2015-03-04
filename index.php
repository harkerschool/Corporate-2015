<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Web Redesign Prototype 2015</title>
<link rel="stylesheet" type="text/css" href="css/app.css">
<style type="text/css">
</style>
</head>
<body>
<?php include "modules/hero.php"; ?>
<main id="main" data-magellan-destination="main">
    <?php 
    include "modules/intro.php";
    include "modules/single-column.php";
    include "modules/two-column.php";
    include "modules/text-photo-right.php";
    include "modules/three-column.php";
    include "modules/accordion-list.php";
    include "modules/text-columns.php";
    include "modules/features.php";
    include "modules/base.php";
    ?>
</main>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/foundation/js/foundation.min.js"></script>
<script charset='ISO-8859-1' src='https://fast.wistia.com/assets/external/E-v1.js'></script>
<script charset='ISO-8859-1' src='https://fast.wistia.com/labs/crop-fill/plugin.js'></script>
<script src="js/app.js"></script>
</body>
</html>