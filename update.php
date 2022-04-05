<?php
    if(isset($_POST['update'])){

        $old_records = json_decode(file_get_contents('database.json'), true);   
        $data_to_save = $old_records;
        echo "<pre>";
        print_r($old_records[$_POST['index']]);
        echo "<pre>";


        $update_records[$_POST['index']] = [
            'PrioRevizuit' => $_POST['Prio'],
            'Status' => $_POST['Status'],
            'DeadLine' => $_POST['Dead-line'],
            'Observatii' => $_POST['obs']
        ];
        echo "<pre>";
        print_r($update_records[$_POST['index']]);
        echo "<pre>";


        $data_to_save[$_POST['index']] = array_replace($old_records[$_POST['index']], $update_records[$_POST['index']]);    
 
        echo "<pre>";
        print_r($data_to_save[$_POST['index']]);
        echo "</pre>";

        if(!file_put_contents('database.json', json_encode($data_to_save, JSON_PRETTY_PRINT), LOCK_EX)){
            $error = "erroe storing data to database, pleas try again";
        }else{
            $success = "problem was stored successfully";
            header('Location:./solver/index.html');
        }
    }
?>