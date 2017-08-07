/*
An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation,
which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, 
as well as the function numToIp that takes a number and converts it to an IP address string. Input will always be valid.

Note that the binary octets are not using two's complement (so we can't have negative numbers) even though JavaScript 
numbers do.
*/
function ipToNum(ip) {
    tokens = ip.split(".");
    token_zero = (tokens[0] >>> 0).toString(2).substr(0, 8);
    token_one = (tokens[1] >>> 0).toString(2).substr(0, 8);
    token_two = (tokens[2] >>> 0).toString(2).substr(0, 8);
    token_three = (tokens[3] >>> 0).toString(2).substr(0, 8);
    while (token_zero.length < 8) {
        token_zero = "0" + token_zero;
    }
    while (token_one.length < 8) {
        token_one = "0" + token_one;
    }
    while (token_two.length < 8) {
        token_two = "0" + token_two;
    }
    while (token_three.length < 8) {
        token_three = "0" + token_three;
    }
    result = token_zero + '' + token_one + '' + token_two + '' + token_three;
    return parseInt(result, 2);
}

function numToIp(num) {
    var part1 = num & 255;
    var part2 = ((num >> 8) & 255);
    var part3 = ((num >> 16) & 255);
    var part4 = ((num >> 24) & 255);
    return part4 + "." + part3 + "." + part2 + "." + part1;
}
