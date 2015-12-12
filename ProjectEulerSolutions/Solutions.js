var Solutions = {};

Solutions.Initialize = function () {
    console.log("Problem 001 = " + Solutions.Problem001());
};

Solutions.Problem001 = function () {
    // Multiple of 3 and 5
    /*
     * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
     * Find the sum of all the multiples of 3 or 5 below 1000.
     */
    var total = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) total += i;
    }
    return total;
    // return 233168
};

$(function () {
    "use strict";
    Solutions.Initialize();
});