<?php
namespace main_nspace\src\classes;

class template {

    public function load_template() {
        echo file_get_contents("templates/index.html");
    }
}

?>