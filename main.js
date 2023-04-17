prediction_one = "";
predictio_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xMlbREcrd/model.json',modelLoaded);

function modelLoaded(){
console.log ('model loaded');
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_one = 'The First Prediction Is' +prediction_one;
    speak_data_two = 'The Second Prediction Is' +prediction_two;
    var utterThis = new SpeechSynthesisUtterance(speak_data_one + speak_data_two);
    synth.speak(utterThis);
    }

    function check(){
img = document.getElementById('captured_image');
classifier.classify(img,gotResult);
    }


    function gotResult(error,results){
        if(error){
            console.error(error);
        }
    else{
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction_one = results[0].label;
prediction_two = results[1].label;
//speak();
if(results[0].label=="happy")
{
    documebt.getElementById("update_emoji").innerHTML = "&#128522;";
}
if(results[0].label=="sad")
{
    documebt.getElementById("update_emoji").innerHTML = "&#128532;";
}
if(results[0].label=="angry")
{
    documebt.getElementById("update_emoji").innerHTML = "&#128548;";
}
if(results[1].label=="happy")
{
    documebt.getElementById("update_emoji2").innerHTML = "&#128522;";
}
if(results[1].label=="sad")
{
    documebt.getElementById("update_emoji2").innerHTML = "&#128532;";
}
if(results[1].label=="angry")
{
    documebt.getElementById("update_emoji2").innerHTML = "&#128548;";
}
    } 
}