const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
let question = document.getElementById('question')

const button = document.getElementById('speak')
button.addEventListener('click', () => {
    recognition.start()

})
recognition.onresult = (e) => {
    const current = e.resultIndex
    const text = e.results[current][0].transcript
    question.innerText = text
    query(text)
}


function startUp() {
    voice('Starting Virtual Assistance')
    voice(' Going Online')
    wishMe()
}

function query(msg) {
    let response = 'i did not understand'
    if (msg.includes('hello') || msg.includes('hey')) {
        response = 'hello sir how can i help you '
    }
    else if (msg.includes('how are you')) {
        response = 'I am good, how can i help you'
    }
    else if (msg.includes('open Google')) {
        response = 'opening Google'
        window.open(`http://google.com`, "_blank");
    }
    else if (msg.includes('open calculator') || msg.includes('open Calculator')) {
        response = 'opening Calculator'
        window.open('Calculator:///');
    }
    else if (msg.includes('open Instagram')) {
        response = 'opening Instagram'
        window.open(`http://instagram.com`, "_blank");
    }
    else if (msg.includes('open Facebook')) {
        response = 'opening Facebook'
        window.open(`http://facebook.com`, "_blank");
    }
    else if (msg.includes('wikipedia') || msg.includes('Wikipedia')) {
        response = 'opening Wikipedia'
        window.open(`https://en.wikipedia.org/wiki/${msg.replace("Wikipedia", "")}`, "_blank");
    } else {
        response = 'I found some information regarding ' + msg
        window.open(`http://google.com/search?q=${msg.replace("search", "")}`, "_blank")
    }


    voice(response)

}


function wishMe() {
    let date = new Date()
    let hour = date.getHours()

    if (hour < 12 && hour >= 0) {
        voice('good morning')
    } else if (hour == 12) {
        voice('Good noon')
    } else if (hour > 12 && hour < 17) {
        voice('Good Afternoon')
    } else {
        voice('Good Evening')
    }
}
startUp()
function voice(sentence) {

    const uttrance = new SpeechSynthesisUtterance(sentence) // predefine class for the word to speak up as voice
    uttrance.rate = 1 // below 1, speed of voice is slow, above one is fast, 1 is normal
    uttrance.pitch = 1 //it is the sharpness of the voice
    window.speechSynthesis.speak(uttrance)
}