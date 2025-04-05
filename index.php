<?php

require_once __DIR__ . '/autoload.php';
use main_nspace\src\classes\headers;
use main_nspace\src\classes\files;
use main_nspace\src\classes\template;

$uuid = uniqid();

// Quick note that sessions can be used in the future to prevent unnecessary calls to PHP files if buttons are reclicked
// Sessions over cookies as this data is only reliant on the file system and not the specific user or computer

$headers = new headers();
$headers->set_headers();
$files = new files();
$files->load_files($uuid);
$template = new template();
$template->load_template();
?>