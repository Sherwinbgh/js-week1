var words = ["disc","joch","kiwi","aqua","rock","tics"];
var random = Math.floor(Math.random() * words.length);
var selectwords = words[random];

var wordelement = document.getElementById("word");

function Ishetgoed(){
    var guessinput= document.getElementById("Raad-input");
    var guess= guessinput.value.toLowerCase();

    if(guess === selectwords){
        displaymessage("congratz je hebt het ");
    }
    else{
        displaymessage("congratz je hebt het fout geraden");
    }
    guessinput.value = "";
}

function displaymessage(message){
    var messageelement = document.getElementById("message");
    messageelement.textContent = message;
}