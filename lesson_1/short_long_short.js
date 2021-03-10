function shortLongShort(str1,str2) {
    if(str1.length < str2.length) {
        return (str1 + str2 + str1);
    } else  {
        return (str2 +str1 +str2);
    }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"


