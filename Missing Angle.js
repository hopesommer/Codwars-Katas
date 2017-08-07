/*
Below is a right-angled triangle:

  |\
  | \
  |  \
  |   \ 
o |    \ h 
  |     \
  |    θ \
  |_______\ 
     a
Your challange is to write a function (missingAngle in C/C#, missing_angle in Ruby), that calculates the angle θ in degrees
to the nearest integer. You will be given three arguments representing each side: o, h and a. One of the arguments equals 
zero. Use the length of the two other sides to calculate θ. You will not be expected to handle any erronous data in your 
solution.

*/
function missingAngle(h, a, o) {
    if (h == 0) {
        return Math.round(Math.atan(o / a) * (180 / Math.PI));
    }
    else if (a == 0) {
        return Math.round(Math.asin(o / h) * (180 / Math.PI));

    }
    else if (o == 0) {
        return Math.round(Math.acos(a / h) * (180 / Math.PI));
    }
}