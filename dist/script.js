// Slider
;(function slider() {
    const imgSlider = document.querySelector('.carousel__container')
    const textSlider = document.querySelector('.quotes__container')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    const images = Array.from(imgSlider.children)
    const texts = Array.from(textSlider.children)

    // select first and last ndoes
    const firstImg = images[0]
    const lastImg = images[images.length - 1]
    const firstText = texts[0]
    const lastText = texts[texts.length - 1]

    let counter = 1
    let animationDuration = 1000
    let lastTime = 0

    images.push(cloneImage(firstImg, null, imgSlider))
    images.unshift(cloneImage(lastImg, firstImg, imgSlider))

    texts.push(cloneImage(firstText, null, textSlider))
    texts.unshift(cloneImage(lastText, firstText, textSlider))

    // update the container size for added nodes
    imgSlider.style.width = `${images.length * 100}%`
    textSlider.style.width = `${images.length * 100}%`

    // EventListeners
    prevBtn.addEventListener('click', prevBtnClickHandler)
    nextBtn.addEventListener('click', nextBtnClickHandler)
    imgSlider.addEventListener('transitionend', counterIncrementHandler)

    // Set the proper slide initially
    changeSlides()

    function nextBtnClickHandler() {
        moveHandler('right')
    }

    function prevBtnClickHandler() {
        moveHandler('left')
    }

    // Moves the slide container horizontally
    function changeSlides() {
        imgSlider.style.transform = `translateX(-${(counter * 100) / images.length}%)`
        textSlider.style.transform = `translateX(-${(counter * 100) / texts.length}%)`
    }

    // Add transitions and update counter
    function moveHandler(direction) {
        let currentTime = new Date().getTime()
        if (currentTime - lastTime < animationDuration) {
            return
        }
        direction === 'right' ? counter++ : counter--
        imgSlider.style.transition = 'all 0.8s cubic-bezier(0.87, 0, 0.13, 1)'
        textSlider.style.transition = 'all 0.8s cubic-bezier(0.87, 0, 0.13, 1)'
        changeSlides()

        lastTime = currentTime
    }

    //reset the counter and transition and then change slides
    function counterIncrementHandler() {
        if (counter === 0) {
            imgSlider.style.transition = 'none'
            textSlider.style.transition = 'none'
            counter = 2
            changeSlides()
        } else if (counter === images.length - 1) {
            imgSlider.style.transition = 'none'
            textSlider.style.transition = 'none'
            counter = 1
            changeSlides()
        }
    }

    // duplicate node to put before and after
    function cloneImage(elem, refElem, arr) {
        const clone = elem.cloneNode(true)
        arr.insertBefore(clone, refElem)
        return clone
    }
})()
