var btn=document.querySelector("#myBtn");
var textarea=document.querySelector("#textArea");
var outputDiv=document.querySelector("#textArea1");

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickHandler(){
    var inputText=textarea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.text))
};
btn.addEventListener("click",clickHandler);