hiddenEl= document.getElementsByClassName('hiddenNav')
loginEl=document.getElementsByClassName('login')

if (localStorage.getItem('isconnected')=="true"){
for(let i=0; i<hiddenEl.length;i++){
    hiddenEl[i].style.display="block"
}
for(let i=0; i<loginEl.length;i++){
    loginEl[i].style.display="none"
}
}
else{
    for(let i=0; i<hiddenEl.length;i++){
        hiddenEl[i].style.display="none"
    }
    for(let i=0; i<loginEl.length;i++){
        loginEl[i].style.display="block"
    } 
}
hiddenEl[1].innerHTML=localStorage.getItem('name')
 hiddenEl[0].addEventListener('click',function(){
    localStorage.setItem('isconnected',"false")
    location.pathname='login.html'
 })
