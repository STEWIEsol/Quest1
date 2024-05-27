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
    setActiveSection('howItWorks');
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="squad_con">
            <div class="squadbox" onclick="showMain()">
                <div class="chapter1">
                    <div class="image">
                        <img src="images/notdao_icon.webp" alt="">
                    </div>
                    <div class="text">
                        <p>Mine Stewie</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="how_it_works_page">
            <h2>How It Works</h2>
            <p>Calling all adventurers! 🌟

Mine Stewie tokens with all your might until the TGE arrives! ⛏️✨ Use different boosters to supercharge your gains and collect even more coins. Head to the Earn section and conquer the daily quests to win massive bags of coins! 💰💥

Invite your friends to join the journey and earn even more riches together! 🎉👯‍♂️ At the end, all your coins will be converted into STWE tokens. These will be distributed equally based on the total coins in the game and among players. The exact exchange ratio isn't available yet, but stay tuned until the TGE for the big reveal! 📅🔍

Join our social media channels for all the latest updates and epic announcements! 📲🌐

And here's the best part: 10% of the total STWE supply will be available for you to play for. If you're lucky and gather enough coins, you'll even be able to purchase a whitelist spot for our upcoming presales from the boost store! 🚀🏆

Are you ready to become the ultimate Stewie Token master? Your adventure awaits! 🌠🔥</p>
        </div>
    `;
}

function showFrens() {
    setActiveSection('frens');
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="squad_con">
            <div class="squadbox" onclick="showMain()">
                <div class="chapter1">
                    <div class="image">
                        <img src="images/notdao_icon.webp" alt="">
                    </div>
                    <div class="text">
                        <p>Mine Stewie</p>
                    </div>
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
                <h3>2,500 Coins for Invite</h3>
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

function showBoosts() {
    setActiveSection('boosts');
    alert('Show Boosts Here');
}

function showKing() {
    setActiveSection('king');
    alert('Show King Leaderboard Here');
}

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('.functions .func');
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
