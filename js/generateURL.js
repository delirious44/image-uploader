/* 
    Generate a random URL
    Choose a number between 0 and 1.
    Slice off the leading '0.' and extra padding zeros.
    Repeat the string by `var length`
    Slice `var length` characters from the string.
*/
var siteURL = "www.imgup.com/";

$(document).ready(function(){
    function GenerateURL(){
        var length = 16;
        var randomString = siteURL + Array(length+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, length);
        return randomString;
    }
    $("#url").html(GenerateURL);
}); 