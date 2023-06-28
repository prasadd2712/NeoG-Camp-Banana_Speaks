
let MYBTN=document.getElementById("myBtn");

let content=document.getElementById("content");

function getData(){
    console.log("get data called here")
    url="fetcch.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        // console.log(response)
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
    
}
console.log("before running get data")

getData();

console.log("After runig get data")
