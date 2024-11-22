const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Update Slide Position
function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Update Dots
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Go to the Previous Slide
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

// Go to the Next Slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
});

// Add Click Events for Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlidePosition();
    });
});


// Initial Setup
updateSlidePosition();

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.3; // Set volume to 30%

    // Add play button
    const playButton = document.createElement('button');
    playButton.textContent = 'PINDUTIN MO TO HABANG NAGBABASA';
    playButton.style.position = 'fixed';
    playButton.style.bottom = '20px';
    playButton.style.right = '20px';
    playButton.style.zIndex = '1500';

    playButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playButton.textContent = '🔇 Pause';
        } else {
            music.pause();
            playButton.textContent = 'PINDUTIN MO TO HABANG NAGBABASA';
        }
    });

    document.body.appendChild(playButton);

    // Optional: Autoplay with user interaction
    document.addEventListener('click', () => {
        music.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }, { once: true });
});







const quiz = [
    {
        question: "Ano favorite mo na gawin together?",
        options: [
            "Gumala/Date",
            "Tambay",
            "yk 😏",
            "ALL OF THE ABOVE"
        ],
        correctAnswer: 3
    },
    {
        question: "Core memory?",
        options: [
            "yung aminan natin",
            "first time natin kumain together na tayo lang",
            "first cuddle",
            "ALL OF THE ABOVE"
        ],
        correctAnswer: 3
    },
    {
        question: "Do you love me as much as I love you?",
        options: [
            "OU",
            "NAUR",
            "HINDI KASI MAS MAHAL KITA",
        ],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const currentQuizItem = quiz[currentQuestion];

    questionEl.textContent = currentQuizItem.question;
    optionsEl.innerHTML = '';

    currentQuizItem.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quiz[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizEl = document.getElementById('quiz');
    const resultEl = document.getElementById('result');
    quizEl.style.display = 'none';

    let message = "";
    if (score === quiz.length) {
        message = "CONGRATS BABYY PERFECT TALAGA TAYO TOGETHER 😍";
    } else if (score >= quiz.length * 0.7) {
        message = "AWWW DI PA PERFECT";
    } else {
        message = "WAG MO KASI PAGTRIPAN";
    }

    resultEl.innerHTML = `
        <h2>Score mo: ${score}/${quiz.length}</h2>
        <p>${message}</p>
    `;
}

// Start the quiz
loadQuestion();