var btn=document.querySelector("#myBtn");
var textarea=document.querySelector("#textArea");
var outputDiv=document.querySelector("#textArea1");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
    // Question mark here is query parameter and text= is (key) and text is value
}

// for handling error
function errorHandler(error){
    console.log("error handler",console.error);
    alert("Something wrong happened with the server.Try Again");
}

function clickHandler(){
    var inputText=textarea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    // Below line is for testing in console
    // .then(json => console.log(json.contents.translated))
    // Now to output the given response from translation api to output textbxo
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })

    .catch(errorHandler)
};
btn.addEventListener("click",clickHandler);

// callback function example

// orderPizza('cheese','burger',function (msg) {
//     console.log(msg);
    
// });

// function orderPizza(type,name,callback){
//     console.log('your order of cheese of burger is being received');

//     setTimeout(function(){
//         const msg='your order is ready!';
//         // console.log(msg);
//         callback(msg);
//     },3000);
// }