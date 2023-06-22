// alert("hello moto");
// var char=prompt("hello type kr");
// alert(char);
// const temp1=document.querySelector("#btn-translate");



// temp1.addEventListener("click",function(){
//     // alert("no beta no");
//     console.log("clicked");
// })


// // Add an event listener to the textarea for the 'input' event
// textArea.addEventListener('mouseover', function() {
//   const value = textArea.value;
//   console.log(value);
// });

// var textArea2 = document.querySelector("#textarea1");
// console.log(textArea2);


// Now printing the elements of textarea in console

// var textArea2 = document.querySelector("#textarea1");
// var new_btn1=document.querySelector("#new-btn");

// function clickHandler(){
//     console.log("text_clicked");
//     console.log("input",textArea2.value);
// }; 

// new_btn1.addEventListener("click",clickHandler);

//  <!-- Creating Dom element using document.createElement() or document.createTextNode() and then insert it using insertBefore() and appendChild(). -->
// Accesiing the document body
var body=document.body;

// create new dic Element
var newDiv= document.createElement('h1');

// assign attributes and modify new properties
newDiv.id='mydiv';
newDiv.className='prasad';

newDiv.textContent="this is newly created div by document.createElement()";

// append new to body
body.appendChild(newDiv);



