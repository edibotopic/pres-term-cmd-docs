// Utility wrappers around anime.js

// Draw an svg path
function drawSvg(slideNumber, svgPathId, time = 3400, delay = 1000, fillColour = '#F0F1EB', strokeColour = '#F0F1EB') {
    let pathSelector = '.' + svgPathId

    let animeParams = {
        targets: pathSelector,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        autoplay: false,
        duration: time,
        fill: fillColour,
        fill: strokeColour,
        fillOpacity: 1.0,
        delay: delay,
        direction: 'forward',
        loop: false,
    }

    let animeInstance = anime(animeParams)

    Reveal.on('slidetransitionend', function(event) {
        let currentSlide = Reveal.getIndices().h

        if (currentSlide === slideNumber) {
            animeInstance.reset()
            animeInstance.play()
        } else if (currentSlide !== slideNumber) {
            animeInstance.reset()
        }
    })
}

// Move an svg to the left
function moveSvgLeft(slideNumber, svgId, extent = -500) {
    let svgSelector = '#' + svgId

    let animeParams = {
        targets: svgSelector,
        translateX: extent,
        duration: 3000,
        delay: 300,
    }

    let animeInstance = anime(animeParams)

    Reveal.on('slidetransitionend', function(event) {
        let currentSlide = Reveal.getIndices().h

        if (currentSlide === slideNumber) {
            animeInstance.reset()
            animeInstance.play()
        } else if (currentSlide !== slideNumber) {
            animeInstance.reset()
        }
    })
}

// Scale an svg
function scaleSvg(slideNumber, svgId, scaleBy = 1.1) {
    let svgSelector = '#' + svgId

    let animeParams = {
        targets: svgSelector,
        scale: scaleBy,
        duration: 3000,
        delay: 800,
    }

    let animeInstance = anime(animeParams)

    Reveal.on('slidetransitionend', function(event) {
        let currentSlide = Reveal.getIndices().h

        if (currentSlide === slideNumber) {
            animeInstance.play()
        } else if (currentSlide !== slideNumber) {
            animeInstance.reset()
        }
    })
}

// jitter an image
function jitter(slideNumber, imgId, intensity = 105) {
    let imgSelector = '#' + imgId

    let animeParams = {
        targets: imgSelector,
        translateY: function() {
            return anime.random(0, intensity)
        },
        translateX: function() {
            return anime.random(0.25, intensity * 0.8)
        },
        easing: 'easeInOutQuad',
        duration: 750,
        direction: 'alternate',
        loop: true,
        loopComplete: function(anim) {
            jitter()
        }
    }

    let animeInstance = anime(animeParams)

    Reveal.on('slidetransitionend', function(event) {
        let currentSlide = Reveal.getIndices().h

        if (currentSlide === slideNumber) {
            jitter()
        }
    })
}
