<?php
require 'functions.php';
// MINIFY HTML
function sanitize_output($buffer)
{
    $search = array(
        '/ {2,}/',
        '/<!--.*?-->|\t|(?:\r?\n[ \t]*)+/s'
    );
    $replace = array(
        ' ',
        ''
    );
  $buffer = preg_replace($search, $replace, $buffer);
    return $buffer;
}
ob_start("sanitize_output");
?>
<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Check website or address is up or down">
  <meta name="author" content="Ghozy Arif Fajri - gojigeje@gmail.com">
  <link rel="icon" href="css/favicon.png">
	<title>onlen atau ga? ~ app by @gojigeje</title>
	<link rel="stylesheet" href="css/onlen.min.css">
</head>
<body>
	<div id="wrapper">
		<div id="status"></div>
		<form method="post" action="">
			<p>Apakah <input type="text" name="domain" value="google.com" onclick="clearDomainInput(this);" autocomplete="off" spellcheck="false" /><a href="#" id="bacon">onlen?</a></p>
		</form>
	</div>
	<script src="./scripts/BBQ.js"></script>
	<script src="./scripts/onlen.min.js"></script>
	<script>
	<?php
	if(!empty($_REQUEST['url'])){
		$url = ltrim($_REQUEST['url'], "/");
		$url = str_replace("/", "//", $url);
		$response = getResponse($url);
		$url = htmlentities($url);
		echo "receiveResponse('".$response."', '$url');\n";
	}
	?>
	</script>
</body>
</html>
