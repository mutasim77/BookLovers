<?php

//database connection;
include('connection.php');

if($conn){
    $userName = $_POST['username']; // username
    $userEmail = $_POST['email']; // email 
    $userPassword = $_POST['password']; // password
    $userDate = $_POST['date']; //date of birth
    $hashedPassword =  md5($userPassword); // hashed Password
    
    //!INSERTION TO DB;
    $sqlInsert = "INSERT INTO users(username, email, password) VALUES ('$userName', '$userEmail', '$hashedPassword')";
    $result = mysqli_query($conn, $sqlInsert);
    if ($result) {
        echo "Success!";
    }else{
        echo "Error!";
    }

}

?>

