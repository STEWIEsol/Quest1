let score = 0;
let left = 6000;

function counter() {
    score++;
    document.getElementById("count").innerHTML = score;
    left--;
    document.getElementById("left_coin").innerHTML = left;
    if (navigator.vibrate) {
        navigator.vibrate(50); // Haptic feedback
    }
    if (score % 69 === 0) {
        showAd();
    }
}

function showAd() {
    document.getElementById('adContainer').style.display = 'block';
    setTimeout(() => {
        document.getElementById('adContainer').style.display = 'none';
    }, 30000); // Show ad for 30 seconds
}

function showFrens() {
    alert('Show Frens Details Here');
}

function showEarn() {
    alert('Show Earn Tasks Here');
}

function showBoosts() {
    alert('Show Boosts Here');
}

function showKing() {
    alert('Show King Leaderboard Here');
}
