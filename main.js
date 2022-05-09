Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
 });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RzePWnB6K/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}