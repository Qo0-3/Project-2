var reasons = [
    "Reason 1: Trees provide oxygen",
    "Reason 2: Trees provide Shade",
    "Reason 3: Trees help in retaining Rainwater"
];

// Use your direct local file names here
var images = [
    "Tree1.png",
    "Tree2.png",
    "Tree3.png"
];

var i = 0;

function nextslide() {
    i = (i + 1) % reasons.length;

    document.getElementById("reasontext").innerHTML = reasons[i]
    document.getElementById("album").src = images[i];
  
    var audio = document.getElementById("audio");
    if (audio) {
        audio.onplay().catch(function(error) {
            console.log("Audio play failed or blocked", error);
        });
    }
}