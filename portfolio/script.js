var text = document.getElementById("contact");
var back = document.getElementById("contact-background");



text.onclick=function(){
    text.classList.toggle('active');
    back.classList.toggle('active');
}

document.onclick = function(e){
    if(e.target.id !== 'contact-background' && e.target.id !== 'contact')
    {
        text.classList.remove('active');
        back.classList.remove('active');
    }
}

// text.addEventListener("click",(e) =>{
// e.preventDefault
// back.style.visibility="visible"
// })
