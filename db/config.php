<?php
// Connection data
define("DB_HOST","localhost");
define("DB_NAME","webinar");
define("DB_USER","root");
define("DB_PASS","root");

$cnct = @mysqli_connect(DB_HOST,DB_USER, DB_PASS, DB_NAME);

if(!$cnct){
    die("Connection failed: " . mysqli_connect_error());
}
mysqli_set_charset($cnct,"UTF8");
