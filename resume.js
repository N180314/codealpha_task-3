//alert("loading");
function addNEWWEField()
    {
       //console.log("Adding new field");
let newNode = document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "Enter here");


let weOb=document.getElementById('we');
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
 }
 function addNEWWEField(){
    let newNode = document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("aqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "Enter here");


let aqOb=document.getElementById('aq');
let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
 }

 //GENERATING CV
 function generateCV(){
   // console.log("generate CV");
   let nameField = document.getElementById('nameFieldT').value;
   let nameT1 = document.getElementById('nameT1');
   nameT2.innerHTML = nameField;
   //direct
   document.getElementById("nameT1").innerHTML = nameField;
   //contact
   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
   //address
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   document.getElementById("LinkedT").innerHTML = document.getElementById("LinkedField").value;
   //objective
   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
   document.getElementById("weT").innerHTML = document.getElementById("weField").value;
   document.getElementById("aqT").innerHTML = document.getElementById("aqField").value;
   //let wes=document.getElementsByClassName('weField');
   //let str="";
 
   //for(let e of wes)
   //{
   // str=str += <li> ${e.value} </li>;
   //}
   //document.getElementById('weT').innerHTML = str;
   //let aqs = document.getElementsByClassName('eqField');
   //let str1='';
   //for(let e of aqs){
    //str1 += `<li> ${e.value} </li>`;
   //}   
   //document.getElementById('aqT').innerHTML = str1;
   document.getElementById("cv-form").style.display = "none";
   document.getElementById("cv-template").style.display = "block";
   }
   function printCV(){
    window.print();
   }

