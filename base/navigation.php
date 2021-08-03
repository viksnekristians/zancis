<!--<div class="container">-->
<?php $path = parse_url($_SERVER['REQUEST_URI'])['path'] ?>

  <div class="header">
    <img class="header-img" src="images/head/peonies.png" alt="peonies">
  </div>

  <div class="nav-main">
    <!--<img class="nav-toggle" src="icons/nav-icon.png" alt="nav icon" width="60" height="60" onclick="toggleNav()">-->
    <ul>
      <li <?php  if ($path==='/zancis/index.php') echo 'style="background-color:#F875AA;"'; ?>><a href="index.php">Par mani </a></li>
      <li <?php  if ($path==='/zancis/gallery.php') echo 'style="background-color:#F875AA;"' ?>><a href="gallery.php">Galerija</a></li>
      <li <?php  if ($path==='/zancis/music.php') echo 'style="background-color:#F875AA;"' ?>><a href="music.php">Muzika</a></li>
      <li <?php  if ($path==='/zancis/contacts.php') echo 'style="background-color:#F875AA;"' ?>><a href="contacts.php">Kontakti</a></li>
    </ul>
    <!--<img class="nav-image" src="images/navigation/peonies.png" alt="peonies" width="150" height="120">-->
  </div>
  <div class="nav-toggle">
    <img class="nav-toggle-image" src="icons/nav-icon.png" alt="nav icon" width="50" height="50" onclick="toggleNav()">
  </div>
  <aside class="nav-sidebar-container">
    <div class="nav-sidebar">
    <ul>
      <li><span style="font-weight: bold;">Mani talanti</span><li>
      <li <?php  if ($path==='/zancis/cooking.php') echo 'style="background-color:#FBACCC;"' ?>><a href="cooking.php">Pavārmāksla</a></li>
      <li><a href="#">Basketbols</a></li>
      <li><a href="#">Fotografēšana</a></li>
      <li><a href="#">Stilista pakalpojumi</a></li>
      <li><a href="#">Profesionālā karjera</a></li>
    </ul>
    </div>
  </aside>
