var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
        }
        function stop(e) {
            var stream = video.srcObject;
            var tracks = stream.getTracks();

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track.stop();
            }

            video.srcObject = null;
        }


var xValues = ["Sad", "Angry", "Happy", "Fear", "Disgust","Neutral","Surprise"];
var yValues = [55, 49, 44, 24, 15, 100 , 15];
var barColors = ["yellow", "red","green","orange","brown","white","yellow"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Emotions",
      fontSize: 20,
    },
    scales:{
        xAxes:[{
         barPercentage:0.2   
        }]
    }
  }
});