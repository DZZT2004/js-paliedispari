// palindromo

function palindroma(p){
    let inverso = "";
    let contatore = p.length - 1;
    while (contatore >= 0){
        inverso += p.charAt(contatore);
        contatore--;
    }
    if(p == inverso){
        console.log("La parola è palindroma");
    }else{
        console.log("La parola non è palindroma");
    }
}

var parola = prompt("Inserisci una parola ");
palindroma(parola);

// dadi

function pariDispari(num){
    if(num%2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}

var pariOdispari = prompt("Scegli tra pari e dispari");
var numeroUtente = prompt("Inserisci un numero da 1 a 5 ");
var numeroComputer = Math.floor(Math.random() * 5) + 1;
var somma = numeroUtente + numeroComputer;
var risultato;
if(pariDispari(somma) == "pari"){
    risultato = "pari";
}else if(pariDispari(somma) == "dispari"){
    risultato = "dispari";
}

if(pariOdispari == risultato){
    console.log("Il giocatore ha vinto");
}else{
    console.log("Il computer ha vinto");
}
