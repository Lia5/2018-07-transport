<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	$pattern = '<tr %s><td style="padding: 10px; border: #e9e9e9 1px solid;"><b>%s</b></td><td style="padding: 10px; border: #e9e9e9 1px solid;">%s</td></tr>';

	foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
       if ( is_array($value) && isset($value['val']) && isset($value['alter']) ) {
           $trStyle = ($c = !$c) ? '':' style="background-color: #f8f8f8;"';
           $message .= vsprintf($pattern, [$trStyle, $value['alter'], $value['val']]);
       }
    }
  }
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	$pattern = '<tr %s><td style="padding: 10px; border: #e9e9e9 1px solid;"><b>%s</b></td><td style="padding: 10px; border: #e9e9e9 1px solid;">%s</td></tr>';

	foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
       if ( is_array($value) && isset($value['val']) && isset($value['alter']) ) {
           $trStyle = ($c = !$c) ? '':' style="background-color: #f8f8f8;"';
           $message .= vsprintf($pattern, [$trStyle, $value['alter'], $value['val']]);
       }
    }
  }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
