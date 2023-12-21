let email=document.getElementById('email')
let password=document.getElementById('password')
const submitBtn=document.getElementById('button')


submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    const users=JSON.parse(localStorage.getItem('users'))

let test=false
for (user of users){
    if (user.email==email.value && user.password==password.value){
        localStorage.setItem('isconnected',"true")
        location.pathname="home.html"
        test=true
        localStorage.setItem('user',JSON.stringify(user))
    }
}
if (test==false){
    alert('this combination was not found')
}
})