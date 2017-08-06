<?php
/*
Find the sum of the odd numbers within an array, after cubing the initial integers.
This function will return undefined (NULL in PHP) if any of the values aren't numbers.
*/
function cube_odd($a) {
    $sum = 0;

    for($i = 0; $i < count($a); $i++) {
        if(!is_numeric($a[$i])) {
            return NULL;
        }

        if(abs($a[$i]) % 2 == 1) {
            $sum += pow($a[$i], 3);
        }
    }

    return $sum;
}
?>