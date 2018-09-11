// Write a function which checks if the same amount of 'd' and 'k' is in the string.
//
// Examples:
// same("ddkk") => true
// same("dkkdd") => false
// same("ddkKm") => true
// same("dmm") => false
// same("eSss") => true // when no 'd' and 'k' is present should return true



export function same(str) {
    var dCount = str.split("d").length - 1;
    var kCount = str.split('k').length -1;

    if(dCount === 0 && kCount === 0) {
        return true;
    }

    if(dCount === kCount) {
        return true;
    } else {
        return false;
    }
}


