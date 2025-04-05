<?php
function my_autoloader($class) {
    $path = str_replace("\\", "/", $class);
    $file = __DIR__ . "/" . $path . ".php";
    if (file_exists($file)) {
        require $file;
    }
}

spl_autoload_register("my_autoloader");
?>