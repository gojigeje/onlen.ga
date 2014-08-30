<?php
function isValidDomain($domain) {
	$pattern = '/^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,10}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&amp;?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/';
	return preg_match($pattern, $domain);
}

function isUp($domain) {
	$ip = gethostbyname($domain);
	$curl = curl_init($domain);
	$returned = 0;
	curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 7);
	curl_setopt($curl, CURLOPT_HEADER, true);
	curl_setopt($curl, CURLOPT_NOBODY, true);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($curl);
	if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 404) {
		$returned = 2;
	} else {
		$returned = $response ? 1 : 0;
	}
	curl_close($curl);
	return $returned;
}

function easteregg($domain) {
	$response = '';
	switch($domain) {
		case $_SERVER['SERVER_NAME']:
			$response = 'kami selalu online :)';
		break;
		case '127.0.0.1':
		case 'localhost':
			$response = '~ home sweet home ~';
		break;
		case 'me':
		case 'saya':
		$response = '<h3>mungkin otakmu lagi offline</h3>';
		break;
		case 'goji':
		case 'gojigeje':
			$response = "<h3>Paling-paling dia sih online :D <br> <a href='http://twitter.com/gojigeje' target='_blank'>cek aja di twitternya: @gojigeje</a></h3>";
			break;
	}
	return $response;
}

function getResponse($domain) {
	if(empty($domain)) {
		$response = 'empty :(';
	} else if(!isValidDomain($domain)) {
		// Check if there is an easteregg
		$easteregg = easteregg($domain);
		if(!empty($easteregg)) {
			$response = $easteregg;
		} else {
			$response = 'domain not valid';
		}
	} else {

		// cek 
		if (preg_match("/.json$/", "$domain")) {
		  $json = true;
		  $domain = str_replace(".json", "", $domain);
		} elseif (preg_match("/.txt$/", "$domain")) {
		  $text = true;
		  $domain = str_replace(".txt", "", $domain);
		} 
		$response = (string) isUp($domain);
		$ip = gethostbyname($domain);

	}

	if ($json) {
		# json
		return "{\"domain\": \"$domain\", \"status\": \"$response\", \"ip\": \"$ip\"}";
	} elseif ($text) {
		# text
		return "$domain, $response, $ip";
	} else {
		return $response;
	}
	
}
