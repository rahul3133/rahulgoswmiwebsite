let valueDisplays = document.querySelectorAll(".num");
let interval = 15000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }

    }, duration)
})

function myFunction() {
    var x = document.getElementById("menu");

    if (x.style.display == "block") {
        x.style.display == "none";
    }
    else {
        x.style.display == "block";
    }
}

const faqs = document.querySelectorAll('.after-dropdown');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change icon
        const icon = faq.querySelector('.uil-plus');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

const faqss = document.querySelectorAll('.faq');

faqss.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil uil-angle-down') {
            icon.className = "uil uil uil-angle-up";
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

const faqs2 = document.querySelectorAll('.faq2');

faqs2.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('');

        //Change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil uil-angle-down') {
            icon.className = "uil uil uil-angle-up";
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // When windows width is 600px
    breakpoints: {
        750: {
            slidesPerView: 2
        }
    }
});

var MainImg = document.getElementById("MainImg");
        var smallImg = document.getElementsByClassName("small-img");

        smallImg[0].onclick = function(){
            MainImg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function(){
            MainImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function(){
            MainImg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function(){
            MainImg.src = smallImg[3].src;
        }
        smallImg[4].onclick = function(){
            MainImg.src = smallImg[4].src;
        }
        smallImg[5].onclick = function(){
            MainImg.src = smallImg[5].src;
        }
        smallImg[6].onclick = function(){
            MainImg.src = smallImg[6].src;
        }
        smallImg[7].onclick = function(){
            MainImg.src = smallImg[7].src;
        }
        smallImg[8].onclick = function(){
            MainImg.src = smallImg[8].src;
        }
        smallImg[9].onclick = function(){
            MainImg.src = smallImg[9].src;
        }
        smallImg[10].onclick = function(){
            MainImg.src = smallImg[10].src;
        }
        smallImg[11].onclick = function(){
            MainImg.src = smallImg[11].src;
        }

//Reloading Matter
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

// Navabr Show and hide

const mobile_nav = document.querySelector(".moblie-navbar-show-btn");

const toggleNavbar = () => {
    alert("The Rahul Goswami's Website")
}



mobile_nav.addEventListener("click", () => toggleNavbar());