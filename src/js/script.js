document.addEventListener('DOMContentLoaded', function () {
    var target = document.getElementById('typing-text');
    var text = "com essa dev junior de qualidade!";
    var speed = 50;
    var eraseSpeed = 30;
    var delay = 1000;

    function typeAndDelete(index) {
        if (index < text.length) {
            target.innerHTML = text.substring(0, index + 1);
            setTimeout(function () {
                typeAndDelete(index + 1);
            }, speed);
        } else {
            setTimeout(function () {
                eraseText(index);
            }, delay);
        }
    }

    function eraseText(index) {
        if (index >= 0) {
            target.innerHTML = text.substring(0, index);
            setTimeout(function () {
                eraseText(index - 1);
            }, eraseSpeed);
        } else {
            setTimeout(function () {
                typeAndDelete(0);
            }, delay);
        }
    }

    typeAndDelete(0);
});