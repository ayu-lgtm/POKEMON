var enterButton=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var item=document.getElementsByTagName("li");

function createListElement(){
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    console.log(li);
    ul.appendChild(li);
    input.value="";
    function crossOut(){
        li.classList.toggle('done');
    }
    li.addEventListener('click',crossOut);
    function deleteListItem(){
        li.classList.add('delete');
    }
    
    var dbtn=document.createElement('button');
    dbtn.appendChild(document.createTextNode('x'));
    li.appendChild(dbtn);
    dbtn.addEventListener('click',deleteListItem);

}
function inputLength(){
    return input.value.length;
}

function addListAfterClick()
{
    if(inputLength()>0)
    {
        createListElement();
    }
}
function addListAfterKeyPress(){
    if(inputLength()>0 && event.which===13)
    {
        createListElement();
    }
}
enterButton.addEventListener('click',addListAfterClick);
input.addEventListener('keypress',addListAfterKeyPress);
