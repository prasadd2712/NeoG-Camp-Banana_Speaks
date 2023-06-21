// alert("hello moto");
// var char=prompt("hello type kr");
// alert(char);
// const temp1=document.querySelector("#btn-translate");



// temp1.addEventListener("click",function(){
//     // alert("no beta no");
//     console.log("clicked");
// })

var textArea2 = document.querySelector("#textarea1");
console.log(textArea2);

// // Add an event listener to the textarea for the 'input' event
// textArea.addEventListener('mouseover', function() {
//   const value = textArea.value;
//   console.log(value);
// });

// var textArea2 = document.querySelector("#textarea1");
// console.log(textArea2);


// Now printing the elements of textarea in console
var textArea2 = document.querySelector("#textarea1");

function clickHandler(){
    console.log(textArea2.value);
}

textArea2.addEventListener("click",clickHandler());



