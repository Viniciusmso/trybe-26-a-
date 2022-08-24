function verifica(a, b,) {
    let maior = '';
    
    if (a > b) {
        maior = a;
    } else maior = b; 
    return maior;
};

console.log(verifica(4, 9))

function verificaTres(a, b, c) {
    let maior = '';
    
    if(a > b && a > c){
        maior = a;
    }
    else if (b > a && b > c){
        maior = b;
    } else maior = c;

    return maior
}
console.log(verificaTres(2, 6, 3));