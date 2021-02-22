shownotes();

var title=document.getElementById("title");
var not=document.getElementById("not");
var button=document.getElementById("addition");
var local=localStorage.getItem("noteswrite");

button.addEventListener("click",function(){

if(local==null)
{
    var obj=[];
    
}
else
{
    var obj=JSON.parse(local);
}
var object={
    title: title.value,
    note: not.value
}
obj.push(object);
localStorage.setItem("noteswrite",JSON.stringify(obj));
title.value="";
not.value="";
shownotes();
})


function shownotes()
{
var add=document.getElementById("notes");
var local=localStorage.getItem("noteswrite");
if(local==null)
{
    var obj=[];

}
else
{
    var obj=JSON.parse(local);
}
let html="";
obj.forEach(function(element,index)
{
    html+=`  <div class="m-2 test card" style="width: 16rem;">

    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p> ${element.note}</p>
        <a  id="${index}" href="#" onclick="delte(this.id)" class="btn btn-primary">Delete</a>
      </div>
    </div>
    `
    
})
console.log(obj.length);
if(obj.length!=0)
{
    console.log("check")
add.innerHTML=html;
}
else{
    add.innerHTML="<h1>Notes</h1><br><p>No notes available right now</p>"
}

}

function delte(index)
{
    var local=localStorage.getItem("noteswrite");
        var obj=JSON.parse(local);
console.log(typeof index);
        obj.splice(index,1);

        console.log(obj)
localStorage.setItem("noteswrite",JSON.stringify(obj));


shownotes();
        
}



var first=document.getElementById("box");

first.addEventListener("input",function()
{
console.log("hello");
var x=first.value.toLowerCase();

var arr=document.getElementsByClassName("test");

Array.from(arr).forEach(function(element)
{
    
var cardtext=element.getElementsByTagName("p")[0].innerText;

if(cardtext.includes(x))
{
    element.style.display="block";
}
else{
    element.style.display="none";
}
})
})