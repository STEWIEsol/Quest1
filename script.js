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
                        <p>Mine Stewie</p>
                    </div>
                    <button class="func" id="howItWorksButton" onclick="showHowItWorks()">How It Works</button>
                </div>
            </div>
        </div>
        <div class="how_it_works_page">
            <h2>How It Works</h2>
            <p>Calling all adventurers! 🌟</p>
            <p>Mine Stewie tokens with all your might until the TGE arrives! ⛏️✨ Use different boosters to supercharge your gains and collect even more coins. Head to the Earn section and conquer the daily quests to win massive bags of coins! 💰💥</p>
            <p>Invite your friends to join the journey and earn even more riches together! 🎉👯‍♂️ At the end, all your coins will be converted into STWE tokens. These will be distributed equally based on the total coins in the game and among players. The exact exchange ratio isn't available yet, but stay tuned until the TGE for the big reveal! 📅🔍</p>
            <p>Join our social media channels for all the latest updates and epic announcements! 📲🌐</p>
            <p>And here's the best part: 10% of the total STWE supply will be available for you to play for. If you're lucky and gather enough coins, you'll even be able to purchase a whitelist spot for our upcoming presales from the boost store! 🚀🏆</p>
            <p>Are you ready to become the ultimate Stewie Token master? Your adventure awaits! 🌠🔥</p>
        </div>
    `;
}

function showFrens() {
    setActiveSection('frens');
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="squad_con">
            <div class="squadbox">
                <div class="chapter1">
                    <div class="image" onclick="showMain()">
                        <img src="images/notdao_icon.webp" alt="">
                    </div>
                    <div class="text">
                        <p>Mine Stewie</p>
                    </div>
                    <button class="func" id="howItWorksButton" onclick="showHowItWorks()">How It Works</button>
                </div>
            </div>
        </div>
        <div class="frens_page">
            <div class="frens_header">
                <h2>Your Frens</h2>
                <p>0 Frens</p>
                <button onclick="howItWorks()">How it Works</button>
            </div>
            <div class="invite_section">
                <h3>Invite Link</h3>
                <p>Invite your frens and get bonuses!</p>
                <div class="invite_link">
                    <input type="text" value="t.me/stewie_quest_bot?start=YOUR_REFERRAL_CODE" readonly>
                    <button onclick="copyLink()">Copy</button>
                </div>
            </div>
            <div class="invite_rewards">
                <h3>2,500 Coins
