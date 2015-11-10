'use strict';

(function run () {

    //
    // Lazy load the background image
    //
    var $hacking = document.querySelector('.hacking');
    var $fully = document.querySelector('.fully--image');
    var uri = $fully.getAttribute('data-src');

    var image = new Image();

    function onDone () {
        $hacking.className = $hacking.className + ' hacking-done';
        $fully.setAttribute('src', uri);
    }

    image.addEventListener('load', onDone);
    image.src = uri;
})();