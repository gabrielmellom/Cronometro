let segundos = 00
let minutos = 00
let horas = 00
let stop 

function iniciar(){
 stop=setInterval(clock,8)

}
function pause(){
    clearInterval(stop)
}
function restar(){
    clearInterval(stop)
    
}
function clock (){
   console.log("hello word")
   segundos++
   if(segundos == 60){
    minutos++
    segundos=0
   }
   if(minutos==60){
    horas++
    minutos=0
   }
   document.getElementById('timer').innerText=horas+':'+minutos+':'+segundos
}

 
const btn = document.getElementById('reset')
btn.addEventListener("click",function(){
    location.reload();
})