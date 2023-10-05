

function notaNecessaria(nota){
       qntFalta = nota - 7
       return "Para atingir a média necessária faltou: " + qntFalta
    
       
}


function mediaAprovar(pnota,snota,tnota,qnota){
    resultado =  (pnota + snota + tnota + qnota) / 4
     if (resultado >= 7){
         return "Sua média é: " + resultado + " ,Parabéns voce foi aprovado"
     }
     return "Você não alcançou a média necessária: " + resultado
}

console.log(mediaAprovar(10,5,9,3))
console.log(notaNecessaria(resultado))