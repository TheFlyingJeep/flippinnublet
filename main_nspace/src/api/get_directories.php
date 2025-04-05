<?php
//$type = "projects";
$type = $_GET['type'];

// Any folder that is directly involved with the website of a subdirectory is not to be used
$unaccep = array("static", "templates");
try {
    // Get every file in the directory passed
    $files = scandir("../../../$type");
    $json = array();
    foreach ($files as $file) {
        // Check if said file is a directory
        if (is_dir("../../../$type/$file")) {
            // If it is a directory, my directory names do not contain spaces, meaning it is likely github related and should be ignored
            // For future reference, all PHP namespaces for projects will contain the word nspace at the end to indicate
            // Any projects/webpages I do not want visible on my website will be marked with either index or hidden and ignored
            if (!in_array($file, $unaccep) && !str_contains($file, "nspace") && !str_contains($file, "indev") && !str_contains($file, ".") && !str_contains($file, "hidden")) {
                if (file_exists("../../../$type/$file/name.txt")) {
                    // Name.txt simply stores the text that I want the project to be called on my website
                    $fileName = fopen("../../../$type/$file/name.txt", "r") or die(json_encode(array("status" => "fail")));
                    $json[$file] = fgets($fileName);
                    fclose($fileName);
                } else {
                    // If name.txt does not exist, JS will handle it with some minimal string formatting
                    $json[$file] = "noname";
                }
            }
        }
    }
    echo json_encode($json);
} catch (Exception $e) {
    // On any fail simply return failure and no other data - Javascript will rerun some attempts with different inputs when I figure out error sources
    echo json_encode(array("status" => "fail"));
}