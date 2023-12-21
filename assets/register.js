let email=document.getElementsByClassName('email')[0]
let userName=document.getElementsByTagName('input')[0]
let password=document.querySelector('#password')
const submitBtn=document.getElementById('button')


let users =[

]
let test


submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(localStorage.getItem('users')==null){
        localStorage.setItem("users","[]")
    }
     users=JSON.parse(localStorage.getItem('users'))
     test=false
for(let i=0;i<users.length;i++){
    if (users[i].email==email.value){
        alert('email already used')
test=true
        break
    }

}
if(test==false){
    users.push({name:userName.value,
    email:email.value,
password:password.value})
localStorage.setItem('users',JSON.stringify(users))
setTimeout(function(){
location.pathname='login.html'

}, 1000);
}
})
