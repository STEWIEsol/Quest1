let score = 0;
let left = 6000;

document.getElementById('tapButton').addEventListener('click', function() {
    counter();
});

function counter() {
    score++;
    document.getElementById("count").innerHTML = score;
    left--;
    document.getElementById("left_coin").innerHTML = left;
    updateProgressBar();
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    if (score % 69 === 0) {
        showAd();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((6000 - left) / 6000) * 100;
    progressBar.style.width = `${progress}%`;
}

function showAd() {
    document.getElementById('adContainer').style.display = 'block';
    setTimeout(() => {
        document.getElementById('adContainer').style.display = 'none';
    }, 30000);
}

function showFrens() {
    setActiveSection('frens');
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
