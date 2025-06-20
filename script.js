// SCRIPT

// Numpad
document.querySelectorAll('.numpad > div').forEach(div => {
    div.addEventListener('click', function() {
        const num = this.className.match(/div(\d)/)[1];
        const img = document.createElement('img');
        img.src = `static/pad/${num}.png`;
        img.alt = num;
        img.style.width = '24px';
        img.style.height = '24px';
        document.querySelector('.output').appendChild(img);
    });
});

// Buttons
document.querySelectorAll('.buttons > div').forEach(div => {
    div.addEventListener('click', function() {
        const btn = this.className.trim(); // p, k, s, h, d
        const img = document.createElement('img');
        img.src = `static/button/${btn}.png`;
        img.alt = btn.toUpperCase();
        img.style.width = '24px';
        img.style.height = '24px';
        document.querySelector('.output').appendChild(img);
    });
});