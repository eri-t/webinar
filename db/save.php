<?php
require_once("config.php");

function select($query){
    global $cnct;
    $res = mysqli_query($cnct, $query);
    if($res == false || mysqli_num_rows($res) === 0){
        return false;
    }
    $data_arr = [];
    while($data = mysqli_fetch_assoc($res)){
        $data_arr[] = $data;
    }
    return $data_arr;
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
$queryEmail = "SELECT email FROM webinar WHERE email = '$email'";
$email_DB = select($queryEmail);

if(empty($email_DB)){
    // get the rest of data:
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $country = $request->country;
    $phone = $request->phone;
    $jobPosition = $request->jobPosition;

    // save the data:
    $insert = "INSERT INTO attendees (firstName, lastName, email, country, phone, jobPosition) VALUES ('$firstName', '$lastName', '$email', '$country', '$phone', '$jobPosition')";

    if(!query($insert)){
        // ideally it should be displayed some error message
        header("Location:../index.html");
        die();
    }
    $data = ['status'=>'ok'];

} else {
    // the attendee was already registered in the database:
    $data = ['status'=>'failed'];
}

header('Content-type: application/json; charset=utf-8');
$json = json_encode($data);
if ($json === false) {
    // Avoid echo of empty string (which is invalid JSON), and
    // JSONify the error message instead:
    $json = json_encode(["jsonError" => json_last_error_msg()]);
    if ($json === false) {
        // This should not happen, but just in case:
        $json = '{"jsonError":"unknown"}';
    }
    // Set HTTP response status code to: 500 - Internal Server Error
    http_response_code(500);
}
echo $json;
