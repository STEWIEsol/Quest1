let score = 0;
let left = 6000;

document.getElementById('tapButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = 'Coins: ' + score;
    if (navigator.vibrate) {
        navigator.vibrate(50); // Vibrate for 50 milliseconds
    }
    // Show AdSense ad every 100 taps
    if (score % 100 === 0) {
        showAd();
    }
});

function counter() {
    score++;
    document.getElementById("count").innerHTML = score;
    left--;
    document.getElementById("left_coin").innerHTML = left;
    if (navigator.vibrate) {
        navigator.vibrate(50); // Haptic feedback
    }
    if (score % 100 === 0) {
        showAd();
    }
}

function showAd() {
    alert('Show Ad Here');
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
