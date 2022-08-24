function positiveOrNegative(a) {
    let resultado = "";
    
    if (a > 0) {
        resultado = "Positive"; 
    } else resultado = "Negative";
    
    return resultado;
}

console.log(positiveOrNegative(2))