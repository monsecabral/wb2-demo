"use strict";

var numKids = 12;
var price;
price = numKids * 9.95; // price is $9.95/kid

if (numKids >= 6) { // Boolean expressions MUST be in a paranthesis or it won't work
    price = price * .9; // a 10% discount
}