// Your task is to create a wave pattern out of a string.
//
// Rules:
// 1. The input will always be lower case string.
// 2. Ignore whitespace.
//
// Examples:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave (" h e y ") => [" H e y ", " h E y ", " h e Y "]
// wave ("") => []

function wave(str) {
    var waveArr = [];
    for(var i=0; i<str.length; i++){
        if(str[i] !== " ") {
            var newString = str.substr(0,i) + str[i].toUpperCase() + str.substr(i+1);
            waveArr.push(newString);
        }
    }
    return waveArr;
}



