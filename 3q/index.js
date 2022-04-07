let empregado = [1, 2, 3, 4]
let anoNasc = 1989;
let anoAtual = 2022;
let idade = anoAtual - anoNasc;
let tempTrabalho = idade - 7;
if(idade >=33 && tempTrabalho >= 7){
    document.write("<br>Empregado: "+ empregado[3] + "<br>Idade: " + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
    

}else if (idade >= 33 || tempTrabalho >= 7){
    document.write("<br>Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}

else {
    document.write("<br>Empregado: "+ empregado[1] + "<br>Idade:"  + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria")
}