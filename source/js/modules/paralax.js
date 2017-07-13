
var parallaxContainer = document.getElementById('parallax');

if(parallaxContainer != null) {
    var moveLayers = function (e) {
        var initialX = (window.innerWidth / 2) - e.pageX;
        var initialY = (window.innerHeight / 2) - e.pageY;

        var
            divider = 3 / 100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
            image = parallaxContainer.firstElementChild;

        parallaxContainer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';
    };

    window.addEventListener('mousemove', moveLayers);
}