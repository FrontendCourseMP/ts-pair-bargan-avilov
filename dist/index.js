var timeNormal = document.querySelector('.data-dest');
var timeDelta = document.querySelector('.data-delta');
var output = document.querySelector('.output');
var time0 = 0;
var time1 = 0;
timeNormal.addEventListener("input", function (event) {
    time0 = Number(event.target.value);
    // console.log(time0);
    var value = (time0 + time1) % 24;
    console.log(output);
    output.value = String(value);
});
timeDelta.addEventListener("input", function (event) {
    time1 = Number(event.target.value);
    var value = (time0 + time1) % 24;
    console.log(output);
    output.value = String(value);
});
