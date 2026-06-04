let cart={};
function addItem(n){cart[n]=(cart[n]||0)+1;render();}
function render(){
let t=0,h='';
for(let k in cart){t+=cart[k];h+=`<p>${k} x${cart[k]}</p>`}
document.getElementById('items').innerHTML=h;
document.getElementById('count').innerText=t;
}
document.getElementById('cartBtn').onclick=()=>document.getElementById('cart').classList.toggle('open');
function sendWhatsApp(){
let msg='Hola Sisa Killari %F0%9F%8C%BF%0A%0AQuiero realizar este pedido:%0A';
for(let k in cart){msg+=`• ${k} x${cart[k]}%0A`}
msg+=`%0ANombre: ${document.getElementById('nombre').value}%0AProvincia: ${document.getElementById('provincia').value}%0ALocalidad: ${document.getElementById('localidad').value}`;
window.open('https://wa.me/5492215980355?text='+msg);
}