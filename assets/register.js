const button=document.getElementById('button')


var password=document.getElementById('password')
let email=document.getElementsByClassName('email')[0]
let name=document.getElementsByTagName('input')[0]
button.addEventListener('click',function(event){
    event.preventDefault()
    if(password.value.length<5 || name.value.length<3 || email.value.includes('@')==false){
        alert('verfier vos donnees ')

    }
    else{
        localStorage.setItem('name',name.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
        setTimeout(function(){
            location.pathname="login.html"
        }, 1500);
    }
})

console.log(document.location)