<?php

if (!function_exists('dd')) {
    function dd(...$var)
    {
        if(is_object($var)){
            $var = get_object_vars($var);
            # $var = json_decode(json_encode($var), true);
        }

        if (is_array($var)) {
            foreach ($var as $v) {
                echo "<pre>";
                print_r($v);
                echo "</pre>";
            }
            exit();
        }
        print_r($var);
        exit();
    }

}
if (!function_exists('is_ajax')) {
    function is_ajax(): bool
    {
        return isset($_SERVER['HTTP_ACCEPT']) &&
            !is_null($_SERVER['HTTP_ACCEPT']) &&
            strtolower($_SERVER['HTTP_ACCEPT']) == 'application/json';
    }
}
