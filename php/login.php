<?php

//database connection;
include('connection.php');

if($conn){
    $userName = $_POST['username']; //username
    $userPassword = $_POST['password']; //password
    $hashedPassword =  md5($userPassword); //hashed Password

    //!SELECTION FROM DATABASE
    $sqlSelect = "SELECT * FROM users WHERE username = " . " '$userName' " . " AND password = " . " '$hashedPassword' " . 'limit 1';
    $result = mysqli_query($conn, $sqlSelect);
    if(mysqli_num_rows($result) == 1){
        echo "Success!";
    }
    else{
        echo "Wrong data!";
    }

}



?>