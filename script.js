let score = 0;
let left = 6969;
let cooldown = 86400000; // 24 hours in milliseconds
let lastTapTime = localStorage.getItem('lastTapTime');
let cooldownEnd = lastTapTime ? parseInt(lastTapTime) + cooldown : 0;
let now = Date.now();

// Check if cooldown has ended
if (now >= cooldownEnd) {
    left = 6969;
    document.getElementById("left_coin").innerHTML = left;
}

document.getElementById('tapButton').addEventListener('click', function() {
    if (now < cooldownEnd) {
        alert("You have reached your daily limit. Please wait until the cooldown period is over.");
        return;
    }

    counter();
});

function counter() {
    score++;
    document.getElementById("count").innerHTML = score;
    left--;
    document.getElementById("left_coin").innerHTML = left;
    if (navigator.vibrate) {
        navigator.vibrate(50); // Haptic feedback
    }
    if (score % 69 === 0 || Math.random() < 0.1) { // Show ad every 69 clicks or randomly
        showAd();
    }
    if (left <= 0) {
        startCooldown();
    }
}

function showAd() {
    document.getElementById('adContainer').style.display = 'block';
    setTimeout(() => {
        document.getElementById('adContainer').style.display = 'none';
    }, 30000); // Show ad for 30 seconds
}

function startCooldown() {
    alert("You have reached the maximum number of taps for today. Please come back after the cooldown period.");
    localStorage.setItem('lastTapTime', Date.now());
    setTimeout(() => {
        left = 6969;
        document.getElementById("left_coin").innerHTML = left;
    }, cooldown);
}

function showFrens() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
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
                    <input type="text" value="t.me/stewie_quest_bot?start=YOUR_REFERRAL_CODE" readonly onclick="copyInviteLink(this)">
                </div>
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

function showEarn() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="earn_page">
            <h2>Earn Coins</h2>
            <p>Complete tasks to earn more coins:</p>
            <ul>
                <li>Like a tweet: 1000 coins</li>
                <li>Retweet: 1000 coins</li>
                <li>Join a Telegram channel: 1000 coins</li>
            </ul>
        </div>
    `;
}

function showBoosts() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="boosts_page">
            <h2>Boosts</h2>
            <p>Buy items to boost your game:</p>
            <ul>
                <li>Auto Mine: 5000 coins</li>
                <li>Energy Boost: 3000 coins</li>
            </ul>
        </div>
    `;
}

function showKing() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="king_page">
            <h2>
