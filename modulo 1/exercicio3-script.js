alert('Está incompleto!');

var numero1 = prompt('Insira o primeiro numero: ');
while (numero1 <= 0){ // precisa ser '<=', se nao passa o valor -0 e da tilt no programa.
    alert('Numero menor que zero, por favor insira outro!')
    var numero1 = prompt('Insira o primeiro numero: ');
}

var sinal = prompt ('Escolha a operação:\n[ + ] Soma\n[ - ] Subtração\n[ * ] Multiplicação\n[ / ] Divisão');

if(sinal == '+'){
var numero2 = prompt('Insira o segundo numero: ');
while (numero2 <= 0){
    alert('Numero menor que zero, por favor insira outro!')
    var numero2 = prompt('Insira o segundo numero: ');
    }
}else{
    alert('Erro!');
    do{
        alert('Erro!');
        var sinal = prompt ('Escolha a operação:\n[ + ] Soma\n[ - ] Subtração\n[ * ] Multiplicação\n[ / ] Divisão');
    }while(sinal != '+'){
    }
}


var resultado = 0;
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

while (numero1 < 0){
    alert('Numero menor que zero, por favor insira outro!')
    var numero1 = prompt('Insira o primeiro numero: ');
}
if(sinal == '+'){
    resultado = numero1 + numero2;
}
else if(sinal == '-'){
    resultado = numero1 - numero2;
}
else if(sinal == '*'){
    resultado = numero1 * numero2;
}
else if(sinal == '/'){
    resultado = numero1 / numero2;
}



/* DA PRA FAZER COM SWITCH CASE, MAS FAZER COM IF & ELSE IF É MELHOR 
switch(sinal){
    case '+':
    resultado = numero1 + numero2;
    break;
}
switch(sinal){
    case '-':
    resultado = numero1 - numero2;
    break;
}
switch(sinal){
    case '*':
    resultado = numero1 * numero2;
    break;
}
switch(sinal){
    case '/':
    resultado = numero1 / numero2;
    break;
}*/

alert(resultado);
