let score = 0;
let left = 6000;
const maxLeft = 6000;
const energyRate = 0.08;
let energy = left;
const energyElement = document.getElementById('left_coin');

document.getElementById('tapButton').addEventListener('click', function() {
    counter();
});

function counter() {
    score++;
    document.getElementById("count").innerHTML = score;
    left--;
    energyElement.innerHTML = Math.floor(left);
    updateProgressBar();
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    if (score % 100 === 0) {
        showAd();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((maxLeft - left) / maxLeft) * 100;
    progressBar.style.width = `${progress}%`;
}

function showAd() {
    document.getElementById('adContainer').style.display = 'block';
    setTimeout(() => {
        document.getElementById('adContainer').style.display = 'none';
    }, 30000);
}

function showMain() {
    location.reload();
}

function showHowItWorks() {
    setActiveSection('howItWorksButton');
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="squad_con">
            <div class="squadbox">
                <div class="chapter1">
                    <div class="image" onclick="showMain()">
                        <img src="images/notdao_icon.webp" alt="">
                    </div>
                    <div class="text">
                        <p class="important">Mine Stewie</p>
                    </div>
                    <button class="func how-it-works-button" id="howItWorksButton" onclick="showHowItWorks()">How It Works</button>
                </div>
            </div>
        </div>
        <div class="how_it_works_page">
            <h2>How It Works</h2>
            <p>Calling all adventurers! 🌟</p>
            <p>Mine Stewie tokens with all your might
