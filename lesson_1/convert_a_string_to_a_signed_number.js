
function stringToSignedInteger(string) {
    if(string[0] === '+') {
         return string.slice(1) * 1;
    } else {
        return string * 1;
    }       
}    