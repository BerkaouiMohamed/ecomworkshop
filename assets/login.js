let email=document.querySelector('#email')
let password=document.querySelector('#password')
const button=document.getElementById('button')
console.log("hello");

button.addEventListener('click',function (e){
    
    e.preventDefault()
if (email.value==localStorage.getItem("email") && password.value==localStorage.getItem('password')){
    localStorage.setItem('isconnected','true')
    location.pathname='home.html'
}
else{alert('verfier vos donnees')}

})

