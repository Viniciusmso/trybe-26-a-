function positiveOrNegative(a) {
    let resultado = "";
    
    if (a > 0) {
        resultado = "Positive"; 
    } else if (a == 0) {
        resultado = "Zero"
    }else resultado = "Negative";
    
    return resultado;
}

console.log(positiveOrNegative(-1))