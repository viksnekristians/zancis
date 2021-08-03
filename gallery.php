<?php include('base/head.html');

$directory = 'images/gallery';
$images = array();
?>
<body>




  <?php include('base/navigation.php'); ?>
  <div class="content-container">
    <h2 style="margin-bottom:10px;">Mana galerija</h2>
    <?php foreach (scandir($directory) as $file) {

        if ($file !== '.' && $file !== '..') {
          array_push($images, $file);
        }

    }
    foreach ($images as $image) {
      echo '<div class="gallery-image" style="background-image: url('.$directory.'/'.$image.'); " onclick=showImage("'.$directory.'/'.$image.'")></div>';
    }
    ?>
  </div>
  <script src="scripts/gallery.js">

  </script>



<?php
include('base/end.html')
 ?>
