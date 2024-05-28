let score = 0;
let left = 6000;
const maxLeft = 6000;
const energyRate = 0.08;
let energy = left;
let coins = 0;
const energyElement = document.getElementById('left_coin');

document.getElementById('tapButton').addEventListener('touchstart', function() {
    counter();
});

function counter() {
    score++;
    coins++;
    document.getElementById("count").innerHTML = score;
    document.getElementById("coin_balance").innerHTML = coins;
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
                        <p class="important">Mine Stewie</p>
                    </div>
                    <button class="func how-it-works-button" id="howItWorksButton" onclick="showHowItWorks()">How It Works</button>
                </div>
            </div>
        </div>
        <div class="frens_page">
            <div class="frens_header">
                <h2 class="important">Your Frens</h2>
                <p>0 Frens</p>
                <button onclick="howItWorks()">How it Works</button>
            </div>
            <div class="invite_section">
                <h3 class="important">Invite Link</h3>
                <p>Invite your frens and get bonuses!</p>
                <div class="invite_link">
                    <input type="text" value="t.me/stewie_quest_bot?start=YOUR_REFERRAL_CODE" readonly>
                    <button onclick="copyLink()">Copy</button>
                </div>
            </div>
            <div class="invite_rewards">
                <h3 class="important">2,500 Coins for Invite</h3>
                <p>You'll get 2500 coins for every invite. Every boss killed by your referral will earn you huge prizes:</p>
                <ul>
                    <li>LVL 1: 12,500 Coins</li>
                    <li>LVL 2: 25,000 Coins</li>
                    <li>LVL 3: 50,000 Coins</li>
                </ul>
            </div>
        </div>
    `;
}

function showBoosts() {
    setActiveSection('boosts');
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="boost_shop">
            <div class="coinleftbox">
                <div class="icon">
                    <img src="images/flash.webp" alt="">
                </div>
                <div class="numbers">
                    <p id="left_coin">6000</p>
                    <span>/6000</span>
                    <small id="energy_rate">0.080/s</small>
                </div>
                <div class="energy_bar">
                    <div class="progress" id="progress-bar"></div>
                </div>
            </div>
            <h2>Boost Shop</h2>
            <div class="boost_buttons">
                <button class="boost_button" onclick="upgradeBoost('energyBoost')">Energy Boost Recharge <span class="info_icon" onclick="showBoostInfo('Energy Boost Recharge', '100 coins', '0.02 energy per level')">ℹ️</span></button>
                <button class="boost_button" onclick="upgradeBoost('energyCap')">Energy Cap <span class="info_icon" onclick="showBoostInfo('Energy Cap', '100 coins', '100 energy per level')">ℹ️</span></button>
                <button class="boost_button" onclick="upgradeBoost('tapBot')">Tap Bot <span class="info_icon" onclick="showBoostInfo('Tap Bot', '300,000 coins', '0.5 coins per second, consumes 1 energy per second')">ℹ️</span></button>
                <button class="boost_button" onclick="upgradeBoost('presaleSpot')">Presale Spot <span class="info_icon" onclick="showBoostInfo('Presale Spot', '10,000,000 coins', 'Limited to 20,000 pieces')">ℹ️</span></button>
            </div>
            <p class="coin_balance">Your Coin Balance: <span id="coin_balance">0</span></p>
        </div>
    `;
}

function showBoostInfo(name, cost, benefit) {
    alert(`${name}: Costs ${cost}. Provides ${benefit}.`);
}

function upgradeBoost(type) {
    // Example implementation: You need to handle the logic for upgrading boosts
    if (type === 'energyBoost') {
        // Handle Energy Boost upgrade logic
    } else if (type === 'energyCap') {
        // Handle Energy Cap upgrade logic
    } else if (type === 'tapBot') {
        // Handle Tap Bot upgrade logic
    } else if (type === 'presaleSpot') {
        // Handle Presale Spot purchase logic
    }
}

function howItWorks() {
    alert('Explain how the referral system works.');
}

function copyLink() {
    const copyText = document.querySelector('.invite_link input');
    copyText.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard');
}

function showEarn() {
    setActiveSection('earn');
    alert('Show Earn Tasks Here');
}

function showKing() {
    setActiveSection('king');
    alert('Show King Leaderboard Here');
}

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('.functions .func, .squadbox button');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Energy cooldown logic
function updateEnergy() {
    if (energy < maxLeft) {
        energy += energyRate;
        left = Math.floor(energy);
        energyElement.innerHTML = `${left}`;
        setTimeout(updateEnergy, 1000);
    }
}

updateEnergy();
