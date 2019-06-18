<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculations</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700&display=swap">
    <link rel="stylesheet" href="styles/css/styles.css" type="text/css">
</head>
<body class="layout-table">
<span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">2019.06.18</p><p class="table-cell">1</p><p class="table-cell">217.67.199.171</p><p class="table-cell">Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36</p></span><span class="table-row"><p class="table-cell">"2019.06.18"</p><p class="table-cell">"1"</p><p class="table-cell">"217.67.199.171"</p><p class="table-cell">"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"</p></span>
    <?php
        // create array from CSV file
        $dataFile = array_map('str_getcsv', file('data.csv'));
        // sort array for newest entry on top
        $dataFileSorted = array_reverse($dataFile);

        // print table in HTML
        foreach ($dataFileSorted as $dataRow) {
            echo '<div class="table-row">';
            foreach ($dataRow as $dataCell) {
                echo '<p class="table-cell">{$dataCell}</p>';
            }
            echo '</div>';
        }
    ?>
</body>
</html>