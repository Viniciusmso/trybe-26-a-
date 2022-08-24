function trianguloVerifica(a, b, c) {
    let resultado = "";
    let soma = "";
    if (a  < 0 && b < 0 && c < 0) {
        resultado = "Erro 404 - ângulo negativo";
    } 
    if (a < 0 ) {
        soma = (a * - 1);
    }
    else if (b < 0 ) {
        soma = (b * - 1);
    }
    else if (c < 0) {
        soma = (c * -1);
    } else soma = a + b + c;

if (soma === 180) {
    resultado = true;
} else resultado = false;
    return resultado;
}

console.log(trianguloVerifica(60, -60, -60))