function checkBrackets(arr) {
    const aux = [];
    const checker = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < arr.length; i++) {
        const op = arr[i];

        if (checker[op]) { 
            if (aux.length === 0 || aux[aux.length - 1] !== checker[op]) {
                return false;
            }
            aux.pop();
        } else {
            aux.push(op);
        }
    }
    return aux.length === 0;
}

console.log(checkBrackets("{}[]()"));