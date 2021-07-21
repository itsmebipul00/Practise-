const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  if(e.results[0].isFinal){
    const text = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log(text)

  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();