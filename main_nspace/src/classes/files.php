<?php
namespace main_nspace\src\classes;

class files {

    public function load_files($uuid) {
        echo "<link rel=\"stylesheet\" href=\"static/css/structure.css?q=$uuid\">";
        echo "<script src=\"static/js/jquery.js?q=$uuid\"></script>";
        echo "<script src=\"static/js/list.js?q=$uuid\"></script>";
        echo "<script src=\"static/js/buttons.js?q=$uuid\"></script>";
        
    }
}
?>