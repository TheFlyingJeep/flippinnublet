<?php
namespace main_nspace\src\classes;

class headers{

    public function set_headers(){
        header("Cache-Control: no-cache, no-store, must-revalidate");
        header("Pragma: no-cache");
        echo "<meta charset=\"utf-8\">";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
        echo "<title>Riley Guerrasio</title>";
    }
}


?>