
<?php
// checks if we recived data
if (isset($_POST['result'])) {
    // collecting user data
    $date = date("Y.m.d");
    $calcResult = $_POST['result'];
    $ipAddress = $_SERVER['REMOTE_ADDR'];
    $browser = $_SERVER['HTTP_USER_AGENT'];

    // combining data and adding double quotes
    $userData = array (
        array (
            sprintf('"%s"', $date),
            sprintf('"%s"', $calcResult),
            sprintf('"%s"', $ipAddress),
            sprintf('"%s"', $browser)
        )
    );
    
    $fileName = 'data.csv';
    // writes data at the end of file.
    // if file doesn't exist it'll creat one.
    $fileHandle = fopen($fileName, "a");

    // adding data to file
    foreach ($userData as $data) {
        fputcsv($fileHandle, $data);
    }
    
    fclose($fileHandle);
}
