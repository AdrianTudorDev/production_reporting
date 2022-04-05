<?php
    if(isset($_POST['submit'])){

        $responsabil = '';

        if ($_POST['Area'] == "Single Stage" || $_POST['Area'] == "Multi Stage" || $_POST['Area'] == "Galerie") {
            $responsabil = "Rober";
        } elseif ($_POST['Area'] == "Keelbeam" || $_POST['Area'] == "Cargo Door" ) {
            $responsabil = "Daniel";
        } elseif ($_POST['Area'] == "Dado Panel" || $_POST['Area'] == "Dado Angle" ) {
            $responsabil = "Sorin";
        }else{
            $responsabil = "Adrian";
        }

        $new_problem = [
            'Area' => $_POST['Area'],
            'LocalManager' => $_POST['LocalManager'],
            'Problema' => $_POST['Problema'],
            'DescriereaProblemei' => $_POST['DescriereaProblemei'],
            'Prio' => $_POST['Prio'],
            'Responsabil' => $responsabil,
            'PrioRevizuit' => 'tbd',
            'Status' => 'tbd',
            'DeadLine' => 'tbd',
            'Observatii' => ''
        ];

        if(filesize('database.json') == 0){
            $first_record = array($new_problem);
            $data_to_save = $first_record;
        }else{
            $old_records = json_decode(file_get_contents('database.json'));
            array_push($old_records, $new_problem);
            $data_to_save = $old_records;
        }

        if(!file_put_contents('database.json', json_encode($data_to_save, JSON_PRETTY_PRINT), LOCK_EX)){
            $error = "erroe storing data to database, pleas try again";
        }else{
            $success = "problem was stored successfully";
            header('Location:./initiator/index.html');
        }
    }
?>