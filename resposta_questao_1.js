function OrderCheck(input) {
    var numArr = [...input.toString()].map(Number);
    var crescente = true;
    var decrescente = true;
    for (var i = 0; i < numArr.length - 1; i++) {
        if (numArr[i] + 1 !== numArr[i + 1] && numArr[i] !== numArr[i + 1]) {
            crescente = false;
        }
        if (numArr[i] - 1 !== numArr[i + 1] && numArr[i] !== numArr[i + 1]) {
            decrescente = false;
        }
    }
    if (crescente || decrescente) {
        return "Está ordenado";
    }else {
        return "Não está ordenado";
    }
}



console.log(OrderCheck(1599));