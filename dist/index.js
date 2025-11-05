var timeNormal = document.querySelector('.data-dest');
var timeDelta = document.querySelector('.data-delta');
var output = document.querySelector('output');
var time0 = 0;
var time1 = 0;
timeNormal.addEventListener("input", function (event) {
    time0 = event.target.value;
    var value = time0 % time1;
    // output.textContent = value.toString()
});
timeDelta.addEventListener("input", function (event) {
    time1 = event.target.value;
    var value = time0 % time1;
    output.textContent = value.toString();
});
