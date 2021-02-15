<?php
    // connect database 
    $db_host = "localhost";
    $db_user = "root";
    $db_password = "Satawat1.";
    $db_name = "newsongdb";

    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
    $mysqli->set_charset("utf8");

    // check connection error 
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    } else {
        // connect success, do nothing
        // echo "Connect success.";
      
    }

    //$kw = $_GET['kw'];
     $kw = $_POST['kw'];
     $typ = $_POST['typ'];
     if($typ == ""){
        $sql = "SELECT *
            FROM music
            WHERE MusicName LIKE '%$kw%'";
    $result = $mysqli->query($sql);
    }
    else{
        $sql = "SELECT *
            FROM music
            WHERE MusicName LIKE '%$kw%'AND AlbumName LIKE '%$typ%'";
    $result = $mysqli->query($sql);
    }
    
    $arr = array();
    if ($result->num_rows > 0){
        // Convert MySQL Result Set to PHP Array of object
        while($row = $result->fetch_object())
        {
            $arr[] = $row;
        }
    } else {
        // echo "Not found.";
    }
    echo json_encode($arr);

    // echo "Found $result->num_rows records.<br>";
    // print_r($result);

    // while($row = $result->fetch_object())
    // {
    //     echo "$row->id, $row->name, $row->email";
    //     echo "<hr>";
    // }

    // Convert MySQL Result Set to PHP Array of object
    // $arr = array();
    // while($row = $result->fetch_object())
    // {
    //     $arr[] = $row;
    // }

    // echo json_encode($arr);