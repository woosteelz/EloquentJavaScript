function countBs(string) {
    cnt = 0
    for (let i = 0; i < string.length; i++){
        if (string[i] == 'B') {
            cnt++;
        }
    }
    return cnt
}

function countChar(string, target) {
    cnt = 0
    for (let i = 0; i < string.length; i++){
        if (string[i] == 'B' || string[i] == target) {
            cnt++;
        }
    }
    return cnt
}

console.log(countBs('ABCD'))
console.log(countChar('ABCD', 'C'))