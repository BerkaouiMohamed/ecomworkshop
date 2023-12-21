let loginEL=document.getElementsByClassName('login')
let hiddenNav=document.getElementsByClassName('hiddenNav')
let main=document.getElementsByTagName('main')[0]




for (product of products){
main.innerHTML+=`   <div id="i${product.id}">
<img src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small/golden-logo-template-free-png.png"
    alt="">

<div class="desc">
    <h2>${product.product}</h2>
    <p id="desc">
        ${product.desc}
    </p>

    <p id="price">${product.price}</p>
<button>add to card</button>
</div>
</div>`
}

if (localStorage.getItem('isconnected')=='true'){
    for (let i=0;i<2;i++){
        loginEL[i].style.display="none"
        hiddenNav[i].style.display="block"
    }
    let user=JSON.parse(localStorage.getItem('user'))
    hiddenNav[1].innerHTML=user.name
}
else{
    for (let i=0;i<2;i++){
        loginEL[i].style.display="block "
        hiddenNav[i].style.display="none"

   
    }


}
hiddenNav[0].addEventListener('click',function(){
    localStorage.setItem('isconnected',"false")
    location.reload()
})