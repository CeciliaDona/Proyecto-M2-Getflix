const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.container__slider')
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide();
  }
  
  setInterval(nextSlide, 10000);
  
  // slider.addEventListener('mouseenter', () => {
  //   clearInterval(slideInterval);
  // });
  
  // slider.addEventListener('mouseleave', () => {
  // slideInterval = setInterval(nextSlide, 5000);
  // });
  
  document.querySelector('#next').addEventListener('click', nextSlide);
  document.querySelector('#previous').addEventListener('click', prevSlide);

////////////////////////////////////////////////////////////////////////////

 import { films } from "../js/data/films.js";

  const templateCategories = document.querySelector("#template-categories");
  const fragment = document.createDocumentFragment();

  // JUST ADDED
  const justAddedContainer = document.querySelector(".container__just-added");

  const justAddedSection = films.filter((item) => item.section === "Just added" || item.sectionTwo === "Just added" || item.sectionThree === "Just added");

  const showJustAdded = () => {
    justAddedSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;

      fragment.appendChild(clone);
    })

    justAddedContainer.appendChild(fragment);
  }
  showJustAdded();

  // TRENDS
  const trendsContainer = document.querySelector(".container__trends");

  const trendsSection = films.filter((item) => item.section === "Trends" || item.sectionTwo === "Trends" || item.sectionThree === "Trends");

  const showTrends = () => {
    trendsSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;

      fragment.appendChild(clone);
    })

    trendsContainer.appendChild(fragment);
  }
  showTrends();


  // CONTINUE WATCHING
  const continueContainer = document.querySelector(".container__continue");

  const continueSection = films.filter((item) => item.section === "Continue watching" || item.sectionTwo === "Continue watching" || item.sectionThree === "Continue watching");

  const showContinueWatching = () => {
    continueSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;

      fragment.appendChild(clone);
    })

    continueContainer.appendChild(fragment);
  }
  showContinueWatching();


  // TOP TEN
  const topTenContainer = document.querySelector(".container__top-10");
  const templateTopTen = document.querySelector("#template-top-ten");

  const topTenSection = films.filter((item) => item.section === "Top ten" || item.sectionTwo === "Top ten" || item.sectionThree === "Top ten");

  const showTopTen = () => {
    topTenSection.forEach((item) => {
      const clone = templateTopTen.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;
      clone.querySelector(".movie-number").textContent = item.top;

      fragment.appendChild(clone);
    })

    topTenContainer.appendChild(fragment);
  }
  showTopTen();