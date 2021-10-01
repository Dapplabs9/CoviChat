var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("label").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("label").innerHTML = content;
    if (content == "symptoms of covid-19" || content == "what are the symptoms of covid-19" || content == "what are some of the symptomes of covid-19" || content == "what are some symptoms of covid-19") {
        speak_one();
    }
    if (content == "what is covid-19") {
        speak_two();
    }
    if (content == "how can I prevent covid-19") {
        speak_three();
    }
    if (content == "what should I do when I get covid-19") {
        speak_four();
    }
    if (content == "what is Quarantine") {
        speak_five();
    }
    if (content == "how long does it take to develop covid-19 symptoms") {
        speak_six();
    }
    if (content == "are antibiotics effective in preventing covid-19" || content == "are antibiotics effective towards covid-19") {
        speak_seven();
    }
    if (content == "is there a vaccine for covid-19") {
        speak_eight();
    }
}
function speak_one(){
    var synth = window.speechSynthesis;
    var speech_data = "Signs and symptoms include respiratory symptoms and include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome and sometimes death.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_two(){
    var synth = window.speechSynthesis;
    var speech_data = "covid-19 is a contagious disease caused by severe acute respiratory syndrome. The first known case was identified in Wuhan, China. The disease has since spread worldwide, leading to an ongoing pandemic";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_three(){
    var synth = window.speechSynthesis;
    var speech_data = "To prevent the spread of covid-19 Clean your hands often. Maintain a safe distance from anyone who is coughing or sneezing. Wear a mask when physical distancing is not possible. Stay home if you feel unwell.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_four(){
    var synth = window.speechSynthesis;
    var speech_data = "Stay home. Most people with COVID-19 have mild illness and can recover at home without medical care. Get rest and stay hydrated. Stay in touch with your doctor. Avoid public transportation and ride-sharing.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_five(){
    var synth = window.speechSynthesis;
    var speech_data = "Quarantine is used for anyone who is a contact of someone infected with the covid-19 whether the infected person has symptoms or not. Quarantine means that you remain separated from others because you have been exposed to the virus";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_six(){
    var synth = window.speechSynthesis;
    var speech_data = "The time from exposure to Covid-19 to the moment when symptoms begin is, on average, 5-6 days and can range from 1-14 days.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_seven(){
    var synth = window.speechSynthesis;
    var speech_data = "Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of Covid-19.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}
function speak_eight(){
    var synth = window.speechSynthesis;
    var speech_data = "Yes The first mass vaccination programme started in early December 2020 and. At least 13 different vaccines (across 4 platforms) have been administered. Campaigns have started in 206 economies.";
    var utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);
}

