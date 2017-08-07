/*
Calculate area and perimeter of the elipse.

You got dimensions of two axis "a" and "b" in centimeters.
*/
function elipse(a, b) {
    var area = Math.PI * (a * b);
    var perimeter = Math.PI * (3 / 2 * (a + b) - Math.sqrt(a * b));
    return "Area: " + area.toFixed(1) + ", perimeter: " + perimeter.toFixed(1);
}