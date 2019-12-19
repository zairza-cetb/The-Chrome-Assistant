const textArea = document.getElementsByTagName('textarea')[0];

var btn = createButton();
document.addEventListener('focusin', onFocusIn);

function onFocusIn(event) {
  el = event.target;
  if (el.type != 'button' && el.type != 'submit') {
    if (el.matches('textarea')) {
      // el.contentEditable ||;&& el.type.match(/email|number|search|text|url/)
      appendButton(el);
    }
  }
}

function createButton() {
  var btn = document.createElement('button');
  btn.textContent = '🎧';
  btn.onclick = function(event) {
    // textArea.textContent = 'clicked';

    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    // let p= document.createElement('p');
    // const words= document.querySelector('.words');
    // words.appendChild(p);

    recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      // p.textContent = transcript;
      // if(e.results[0].isFinal)
      // {
      //     p = document.createElement('p');
      //     words.appendChild(p);
      // }
      // if(transcript.includes('get weather'))
      // {
      //     alert("Getting weather");
      // }

      textArea.textContent = transcript;

      console.log(transcript);
    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();
  };
  return btn;
}

function appendButton(textElement) {
  textElement.parentElement.insertBefore(btn, textElement.nextElementSibling);
}
