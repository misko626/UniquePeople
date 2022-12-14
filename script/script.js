/*
 * Form validation
 */

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const errorMessage = document.querySelector(".error-message");

  if (!isEmail(emailValue)) {
    console.log("invalid email");
    errorMessage.classList.add("error-validation");
    errorMessage.innerText = "Nesprávna Email adresa";
    email.style.border = "3px solid red";
    return;
  } else {
    errorMessage.classList.add("error-validation");

    errorMessage.innerText = "";
    email.style.border = "2px solid #8cc63f";
    errorMessage.style.color = "#8cc63f";
    errorMessage.innerText = "Message sent";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/*
 * NAV Animation from TOP
 */

const navContainer = document.getElementById("navContainer");
const navbar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

const navLinkSearch = document.querySelector(".nav-link-search");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navContainer.classList.add("nav-contaniner-scrolled");
    for (var link of navLinks) {
      link.classList.add("link-scrolled");
    }
  } else {
    navContainer.classList.remove("nav-contaniner-scrolled");
    for (var link of navLinks) {
      link.classList.remove("link-scrolled");
    }
  }
});

/*
 * NAV Mobile
 */
const navMobileIcon = document.querySelector(".menu-icon");
let isMenuOpen = false;
function onClickMenu() {
  navContainer.classList.toggle("nav-container-mobile");
  navContainer.classList.toggle("nav-container");
  if (!isMenuOpen) {
    navMobileIcon.src = "./assets/img/icons8-close.svg";
  } else {
    navMobileIcon.src = "./assets/img/icons8-menu.svg";
  }

  isMenuOpen = isMenuOpen === false ? true : false;
  console.log(isMenuOpen);
}

/*
 * Footer Mobile
 */

const footerArrow = document.querySelector(".f-arrow");
const footerContainer = document.querySelector(".footer-container");
let isFooterOpen = false;
footerArrow.addEventListener("click", () => {
  if (!isFooterOpen) {
    footerContainer.style.height = "100%";
    footerArrow.style.transform = "rotate(180deg)";
  } else {
    footerContainer.style.height = "0";
    footerArrow.style.transform = "rotate(0deg)";
  }
  isFooterOpen = isFooterOpen === false ? true : false;
});

/*
 *Slider
 */
let navigationTime = true;

function swiperGo() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });
}

/*
 *Slider
 */

const data = document.getElementById("data");

//fetching data from API endpoint

fetch(`https://mocki.io/v1/08021574-f46d-4231-bca1-ffd6a3315b7c`)
  .then((res) => {
    //console.log(res);
    if (!res.ok) throw new Error(`Problem with API ${res.status}`);
    return res.json();
  })
  .then((data) => {
    //render json data at FrontEnd
    renderData(data.data);
    //calling swiper function
    swiperGo();
  });

//fucntion for rendering data at FrontEnd
function renderData(data) {
  let htmlSwiperContainerCards = "";
  console.log(data);
  const swiperContainer = document.getElementById("swiperContainer");
  for (let i = 0; i < data.length; i++) {
    console.log(i);
    htmlSwiperContainerCards += `<div class="swiper-slide">
    <img
      class="slide-image"
      src="${data[i].image}"
      alt=""
    />

    <h3 class="slide-heading">${data[i].title}</h3>
    <p class="slide-paragraph">
      ${data[i].content.split(" ").slice(0, 10).join(" ")} ...
    </p>
    <button class="slide-button">
      More <img src="./assets/img/download.svg" alt="" />
    </button>
  </div>`;
  }
  swiperContainer.innerHTML = htmlSwiperContainerCards;
}

window.addEventListener("scroll", appearElement);

function appearElement() {
  //screen sroll value
  const screenPosition = (window.innerHeight / 2) * 1.3;
  const servicesLogo = document.querySelector(".services-logo");
  const servicesHeading = document.querySelector(".services-heading");
  const servicesSlider = document.querySelector(".swiper");
  const servicesParagraph = document.querySelector(".services-paragraph");

  const logoPosition = servicesLogo.getBoundingClientRect().top;
  const headingPosition = servicesHeading.getBoundingClientRect().top;
  const sliderPosition = servicesSlider.getBoundingClientRect().top;
  const paragraphPosition = servicesParagraph.getBoundingClientRect().top;

  if (logoPosition < screenPosition) {
    servicesLogo.classList.add("appear-logo");
  }

  if (headingPosition < screenPosition) {
    servicesHeading.classList.add("appear-heading");
  }
  if (sliderPosition < screenPosition) {
    servicesSlider.classList.add("appear-slider");
  }
  if (paragraphPosition < screenPosition) {
    servicesParagraph.classList.add("appear-paragraph");
  }
}
