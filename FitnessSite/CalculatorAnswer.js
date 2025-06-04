

const slideData = [
    { title: "BMR Calculator", text: "Estimates the number of calories your body burns at rest.", answer: innerHTML = `<p style="color: rgb(0, 0, 0);" id="result1"></p>`},
    { title: "BMI Calculator", text: "Measures body weight relative to height",  answer: innerHTML = `<p style="color: rgb(0, 0, 0);" id="result2"></p>`},
    { title: "Body Fat Calculator", text: "Measures the body fat", answer: innerHTML = `<p style="color: rgb(0, 0, 0);" id="result3"></p>` },
    
];

const slidesContainer = document.getElementById("slides");
let currentSlide = 0;

function updateSlides() {
    

    slideData.forEach((slide, index) => {
        const slideDiv = document.createElement("div");
        slideDiv.classList.add("slide");
        slideDiv.innerHTML = `
            <h2>${slide.title}</h2>
            <p>${slide.text}</p>
            <p>${slide.answer}</p>
            

            <div class="button-container">
                <button class="button ${index === 0 ? "hidden" : ""}" onclick="prevSlide()">Back</button>
                ${index < slideData.length - 1 ? `<button class="button" onclick="nextSlide()">Next</button>` : ""}
            </div>
        `;
        slidesContainer.appendChild(slideDiv);
    });

  
    slidesContainer.style.transform = `translateX(-${currentSlide * 300}px)`;
}

function nextSlide() {
    if (currentSlide < slideData.length - 1) {
        currentSlide++;
        updateSlides();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
    }
}

updateSlides();








