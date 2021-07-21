const secondh= document.querySelector('.second-hand')
const minh= document.querySelector('.min-hand')
const hourh= document.querySelector('.hour-hand')

function setDate(){
const time= new Date()

const seconds= time.getSeconds()
const secondDegree= ((seconds/60)*360)+90;
secondh.style.transform= `rotate(${secondDegree}deg)`

const mins= time.getMinutes()
const minsDegree= ((mins/60)*360)+ ((seconds/60)*6)+ 90;
minh.style.transform= `rotate(${minsDegree}deg)`

const hour= time.getHours()
console.log(hour)
const hourDegree= ((hour/60)*360)+ ((mins/60)*30) +90;
hourh.style.transform= `rotate(${hourDegree}deg)`

}

setInterval(setDate, 1000)
setDate()