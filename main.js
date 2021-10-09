function MicOn(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LvVvPuxsY/model.json',model_ready);
}

function model_ready(){
    classifier.classify(gotResults);

}

function gotResults(error, results){
console.log(results);
document.getElementById("Hear").innerHTML= results[0].label;
document.getElementById("Accuracy").innerHTML= results[0].confidence;
var Al1= document.getElementById("A1");
var Al2= document.getElementById("A2");
var Al3= document.getElementById("A3");
var Al4= document.getElementById("A4");
if(results[0].label== "Mooing"){
    Al1.src= 'aliens-01.gif';
    Al2.src= 'aliens-02.png';
    Al3.src= 'aliens-03.png';
    Al4.src= 'aliens-04.png';
}
else if(results[0].label== "Meowing"){
    Al1.src= 'aliens-01.png';
    Al2.src= 'aliens-02.gif';
    Al3.src= 'aliens-03.png';
    Al4.src= 'aliens-04.png';
}
else if(results[0].label== "Roar"){
    Al1.src= 'aliens-01.png';
    Al2.src= 'aliens-02.png';
    Al3.src= 'aliens-03.gif';
    Al4.src= 'aliens-04.png';
}
else {
    Al1.src= 'aliens-01.png';
    Al2.src= 'aliens-02.png';
    Al3.src= 'aliens-03.png';
    Al4.src= 'aliens-04.gif';
}
}
