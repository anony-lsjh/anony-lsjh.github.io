// this is simple check db also need one too

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const suspiciousPattern = /['"<>;=()--]|(\b(drop|select|insert|delete|update|alter|create|shutdown|truncate|exec)\b)/i;

    const suspiciousWords = [
        "'", '"', ";", "--", "/*", "*/", "DROP", "SELECT", "INSERT", "DELETE", 
        "UPDATE", "ALTER", "CREATE", "SHUTDOWN", "TRUNCATE", "EXEC"
    ];

    function containsSuspiciousWord(input) {
        return suspiciousWords.some(word => input.toUpperCase().includes(word));
    }

    if (name === '') {
        alert('請輸入您的暱稱');
        event.preventDefault();
        return;
    }

    if (email === '') {
        alert('請輸入您的電子郵件');
        event.preventDefault();
        return;
    }

    if (message === '') {
        alert('請輸入您的訊息');
        event.preventDefault();
        return;
    }

    if (suspiciousPattern.test(name) || suspiciousPattern.test(email) || suspiciousPattern.test(message)) {
        alert('您的輸入包含不允許的字元或關鍵字');
        event.preventDefault();
        return;
    }

    if (containsSuspiciousWord(name) || containsSuspiciousWord(email) || containsSuspiciousWord(message)) {
        alert('您的輸入包含不允許的字元或關鍵字');
        event.preventDefault();
        return;
    }
});

