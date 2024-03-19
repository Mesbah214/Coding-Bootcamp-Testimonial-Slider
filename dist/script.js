// Slider
(function slider() {
    const imgSlider = document.querySelector(".carousel__container");
    const textSlider = document.querySelector(".quotes__container");

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let counter = 1;
    let animationDuration = 1000;
    let lastTime = 0;

    // EventListeners
    prevBtn.addEventListener("click", prevBtnClickHandler);
    nextBtn.addEventListener("click", nextBtnClickHandler);
    imgSlider.addEventListener("transitionend", counterIncrementHandler);
    nextBtn.focus()

    // Set the proper slide initially
    changeSlides();

    function nextBtnClickHandler() {
        moveHandler("right");
    }

    function prevBtnClickHandler() {
        moveHandler("left");
    }

    // Moves the slide container horizontally
    function changeSlides() {
        imgSlider.style.transform = `translateX(-${counter * 25}%)`;
        textSlider.style.transform = `translateX(-${counter * 25}%)`;
    }

    // Add transitions and update counter
    function moveHandler(direction) {
        let currentTime = new Date().getTime();
        if (currentTime - lastTime < animationDuration) {
            return;
        }
        direction === "right" ? counter++ : counter--;
        imgSlider.style.transition = "all 0.8s cubic-bezier(0.87, 0, 0.13, 1)";
        textSlider.style.transition = "all 0.8s cubic-bezier(0.87, 0, 0.13, 1)";
        changeSlides();

        lastTime = currentTime;
    }

    //reset the counter and transition and then change slides
    function counterIncrementHandler() {
        if (counter === 0) {
            imgSlider.style.transition = "none";
            textSlider.style.transition = "none";
            counter = 2;
            changeSlides();
        } else if (counter === 3) {
            imgSlider.style.transition = "none";
            textSlider.style.transition = "none";
            counter = 1;
            changeSlides();
        }
    }
})();