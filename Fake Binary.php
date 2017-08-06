<?php
/*
 Given a string of digits, you should replace any digit below 5 with '0' and any
 digit 5 and above with '1'. Return the resulting string.
 */
function fake_bin(string $s): string {
    return preg_replace("/[5-9]/", "1", preg_replace ("/[0-4]/", "0", $s));
}
?>