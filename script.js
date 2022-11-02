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