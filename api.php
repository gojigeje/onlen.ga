<?php
  require 'functions.php';
  if(!empty($_REQUEST['url'])){
  	$url = $_REQUEST['url'];
  	echo getResponse($url);
  }
?>