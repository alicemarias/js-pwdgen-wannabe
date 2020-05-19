// Chiedo all'utente il suo nome
var nome = prompt('Inserisci il tuo nome');

// chiedo all'utente il suo cognome
var cognome = prompt('Inserisci il tuo cognome');

// chiedo all'utente il suo colore preferito
var colore = prompt('Inserisci il tuo colore preferito');

// risultato password
var password = nome + cognome + colore + '19' ;
document.getElementById('password').innerHTML = password;
