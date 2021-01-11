<?php
require_once("config.php");

function exists($query){
    global $cnct;
    $res = mysqli_query($cnct, $query);
    return mysqli_num_rows($res) > 0;
}

function query($query){
    global $cnct;
    $res = mysqli_query($cnct, $query);
    if(mysqli_error($cnct))
        return mysqli_error($cnct);
    return $res;
}

$request = json_decode(file_get_contents('php://input'));

$email = $request->email;

// check if the email is already saved:
$queryEmail = "SELECT * FROM attendees WHERE email = '$email'";
$email_DB = exists($queryEmail);

if(!$email_DB){
    // get the rest of data:
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $country = $request->country;
    $phone = $request->phone;
    $jobPosition = $request->jobPosition;

    // save the data:
    $insert = "INSERT INTO attendees (firstName, lastName, email, country, phone, jobPosition) VALUES ('$firstName', '$lastName', '$email', '$country', '$phone', '$jobPosition')";

    if(!query($insert)){
        // ideally some error message should be displayed 
        header("Location:../index.html");
        die();
    }
    $data = ['status'=>'ok'];

} else {
    // the attendee was already registered in the database:
    $data = ['status'=>'failed'];
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($data);