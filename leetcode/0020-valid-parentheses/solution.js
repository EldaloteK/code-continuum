/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var checkList = [];
    var openingBrackets = ['(','{','['];
    var bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    var check = false;
    if (s.length <= 1) {
        check = false;
    }
    for (let bracket of s) {
        if (openingBrackets.includes(bracket)) {
            checkList.push(bracket);
        } else {
            if (bracketMap[bracket] == checkList.slice(-1)) {
                checkList.pop();
                check = true;
            } else {
                return false;
            }
        }
    }
    if (checkList.length > 0) {
        check = false;
    }
    return check;
};
