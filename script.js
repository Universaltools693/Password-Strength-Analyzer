// Password Strength Analyzer Logic
function analyzePassword() {
    const password = document.getElementById('passwordInput').value;
    const result = document.getElementById('result');
    const suggestions = document.getElementById('suggestions');

    // Reset previous results
    result.innerHTML = '';
    suggestions.innerHTML = '';

    // Password strength criteria
    let strength = 0;
    const suggestionsList = [];

    // Length check
    if (password.length >= 12) strength += 2;
    else if (password.length >= 8) strength += 1;
    else suggestionsList.push('Password should be at least 8 characters long.');

    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 1;
    else suggestionsList.push('Add uppercase letters.');

    // Lowercase check
    if (/[a-z]/.test(password)) strength += 1;
    else suggestionsList.push('Add lowercase letters.');

    // Number check
    if (/[0-9]/.test(password)) strength += 1;
    else suggestionsList.push('Add numbers.');

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    else suggestionsList.push('Add special characters (e.g., !@#$%).');

    // Determine strength level
    let strengthText = '';
    let strengthColor = '';
    if (strength >= 6) {
        strengthText = 'Strong';
        strengthColor = '#00e676';
    } else if (strength >= 4) {
        strengthText = 'Medium';
        strengthColor = '#ffca28';
    } else {
        strengthText = 'Weak';
        strengthColor = '#ff5252';
    }

    // Display result
    result.innerHTML = `Password Strength: <span style="color: ${strengthColor}">${strengthText}</span>`;

    // Display suggestions
    if (suggestionsList.length > 0) {
        suggestions.innerHTML = 'Suggestions:<br>' + suggestionsList.join('<br>');
    }
}

// Scroll-based Ad Trigger (Example)
window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 70) {
        // Trigger additional ads (e.g., interstitial or video ad)
        console.log('70% scroll reached - Trigger ad');
        // Replace with actual ad network code when integrating
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
