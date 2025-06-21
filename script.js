// SCRIPT

let spanBgToggle = true;

document.getElementById('enviar').addEventListener('click', function() {
    spanBgToggle = !spanBgToggle;
});

function updateOutputImages() {
    const output = document.querySelector('.output');
    const imgs = Array.from(output.querySelectorAll('img'));
    let i = 0;
    while (i <= imgs.length - 5) {
        const srcA = imgs[i].src;
        const srcB = imgs[i + 1].src;
        const srcC = imgs[i + 2].src;
        const srcD = imgs[i + 3].src;
        const srcE = imgs[i + 4].src;

        // 41236
        if (
            srcA.endsWith('4.png') &&
            srcB.endsWith('1.png') &&
            srcC.endsWith('2.png') &&
            srcD.endsWith('3.png') &&
            srcE.endsWith('6.png')
        ) {
            const img41236 = document.createElement('img');
            img41236.src = 'static/motion-input/41236.png';
            img41236.alt = '41236';
            img41236.style.width = '24px';
            img41236.style.height = '24px';
            img41236.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.replaceChild(img41236, imgs[i]);
            output.removeChild(imgs[i + 4]);
            output.removeChild(imgs[i + 3]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 5, img41236);
            continue;
        }

        // 63214 (41236 invertido horizontalmente)
        if (
            srcA.endsWith('6.png') &&
            srcB.endsWith('3.png') &&
            srcC.endsWith('2.png') &&
            srcD.endsWith('1.png') &&
            srcE.endsWith('4.png')
        ) {
            const img41236inv = document.createElement('img');
            img41236inv.src = 'static/motion-input/41236.png';
            img41236inv.alt = '63214';
            img41236inv.style.width = '24px';
            img41236inv.style.height = '24px';
            img41236inv.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            img41236inv.style.transform = 'scaleX(-1)';
            output.replaceChild(img41236inv, imgs[i]);
            output.removeChild(imgs[i + 4]);
            output.removeChild(imgs[i + 3]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 5, img41236inv);
            continue;
        }

        // 87412
        if (
            srcA.endsWith('8.png') &&
            srcB.endsWith('7.png') &&
            srcC.endsWith('4.png') &&
            srcD.endsWith('1.png') &&
            srcE.endsWith('2.png')
        ) {
            const img87412 = document.createElement('img');
            img87412.src = 'static/motion-input/87412.png';
            img87412.alt = '87412';
            img87412.style.width = '24px';
            img87412.style.height = '24px';
            img87412.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.replaceChild(img87412, imgs[i]);
            output.removeChild(imgs[i + 4]);
            output.removeChild(imgs[i + 3]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 5, img87412);
            continue;
        }

        i++;
    }

    i = 0;
    while (i <= imgs.length - 3) {
        const src2 = imgs[i].src;
        const src3 = imgs[i + 1].src;
        const src6 = imgs[i + 2].src;
        if (
            src2.endsWith('2.png') &&
            src3.endsWith('3.png') &&
            src6.endsWith('6.png')
        ) {
            // Crear imagen 236.png
            const img236 = document.createElement('img');
            img236.src = 'static/motion-input/236.png';
            img236.alt = '236';
            img236.style.width = '24px';
            img236.style.height = '24px';
            img236.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.replaceChild(img236, imgs[i]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 3, img236);
        } else if (
            src2.endsWith('6.png') &&
            src3.endsWith('2.png') &&
            src6.endsWith('3.png')
        ) {
            // Crear imagen 623.png
            const img623 = document.createElement('img');
            img623.src = 'static/motion-input/623.png';
            img623.alt = '623';
            img623.style.width = '24px';
            img623.style.height = '24px';
            img623.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.replaceChild(img623, imgs[i]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 3, img623);
        } else if (
            src2.endsWith('2.png') &&
            src3.endsWith('1.png') &&
            src6.endsWith('4.png')
        ) {
            // Crear imagen 236.png invertida horizontalmente (214)
            const img236inv = document.createElement('img');
            img236inv.src = 'static/motion-input/236.png';
            img236inv.alt = '214';
            img236inv.style.width = '24px';
            img236inv.style.height = '24px';
            img236inv.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            img236inv.style.transform = 'scaleX(-1)';
            output.replaceChild(img236inv, imgs[i]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 3, img236inv);
        } else if (
            src2.endsWith('4.png') &&
            src3.endsWith('2.png') &&
            src6.endsWith('1.png')
        ) {
            // Crear imagen 623.png invertida horizontalmente (421)
            const img623inv = document.createElement('img');
            img623inv.src = 'static/motion-input/623.png';
            img623inv.alt = '421';
            img623inv.style.width = '24px';
            img623inv.style.height = '24px';
            img623inv.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            img623inv.style.transform = 'scaleX(-1)';
            output.replaceChild(img623inv, imgs[i]);
            output.removeChild(imgs[i + 2]);
            output.removeChild(imgs[i + 1]);
            imgs.splice(i, 3, img623inv);
        } else {
            i++;
        }
    }
}

// Numpad
document.querySelectorAll('.numpad > div').forEach(div => {
    div.addEventListener('click', function() {
        const output = document.querySelector('.output');
        if (document.getElementById('pad').checked) {
            const num = this.className.match(/div(\d)/)[1];
            const img = document.createElement('img');
            img.src = `static/pad/${num}.png`;
            img.alt = num;
            img.style.width = '24px';
            img.style.height = '24px';
            img.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.appendChild(img);
        } else {
            // Mostrar el número como texto, color #5E5D5D
            const num = this.className.match(/div(\d)/)[1];
            const span = document.createElement('span');
            span.textContent = num;
            span.style.color = '#5E5D5D';
            span.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.appendChild(span);
        }
        updateOutputImages();
    });
});

// Buttons
document.querySelectorAll('.buttons > div').forEach(div => {
    div.addEventListener('click', function() {
        const output = document.querySelector('.output');
        const btn = this.className.trim(); // p, k, s, h, d
        if (document.getElementById('buttons').checked) {
            const img = document.createElement('img');
            img.src = `static/button/${btn}.png`;
            img.alt = btn.toUpperCase();
            img.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.appendChild(img);
        } else {
            // Mostrar el nombre en mayúsculas y color correspondiente
            const span = document.createElement('span');
            span.textContent = btn.toUpperCase();
            span.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            switch (btn) {
                case 'p':
                    span.style.color = '#FF8EFF'; // 
                    break;
                case 'k':
                    span.style.color = '#65CAFC'; // 
                    break;
                case 's':
                    span.style.color = '#36E79D'; // 
                    break;
                case 'h':
                    span.style.color = '#F03030'; // 
                    break;
                case 'd':
                    span.style.color = '#FD9930'; // 
                    break;
            }
            output.appendChild(span);
        }
        updateOutputImages();
    });
});

// Permitir ingresar direccionales del pad y botones usando el teclado
document.addEventListener('keydown', function(e) {
    // Borrar el último elemento con Backspace
    if (e.key === 'Backspace') {
        const output = document.querySelector('.output');
        if (output.lastChild) {
            output.removeChild(output.lastChild);
        }
        return; // No procesar nada más si es Backspace
    }

    // Numpad (direccionales)
    let num = null;
    if (e.code.startsWith('Numpad') && e.code.length === 7) {
        num = e.code.slice(-1); // 'Numpad1' -> '1'
    } else if (e.key >= '1' && e.key <= '9') {
        num = e.key;
    }
    if (num && num >= 1 && num <= 9) {
        const output = document.querySelector('.output');
        if (document.getElementById('pad').checked) {
            const img = document.createElement('img');
            img.src = `static/pad/${num}.png`;
            img.alt = num;
            img.style.width = '24px';
            img.style.height = '24px';
            img.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.appendChild(img);
        } else {
            const span = document.createElement('span');
            span.textContent = num;
            span.style.color = '#5E5D5D';
            span.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            span.style.display = 'inline-block';
            span.style.width = '24px';
            span.style.height = '24px';
            span.style.lineHeight = '24px';
            span.style.textAlign = 'center';
            span.style.fontWeight = 'bold';
            span.style.borderRadius = '4px';
            output.appendChild(span);
        }
        updateOutputImages();
        return;
    }

    // Botones (p, k, s, h, d)
    const validButtons = ['p', 'k', 's', 'h', 'd'];
    const key = e.key.toLowerCase();

    if (validButtons.includes(key)) {
        const output = document.querySelector('.output');
        if (document.getElementById('buttons').checked) {
            const img = document.createElement('img');
            img.src = `static/button/${key}.png`;
            img.alt = key.toUpperCase();
            img.style.width = '24px';
            img.style.height = '24px';
            img.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            output.appendChild(img);
        } else {
            const span = document.createElement('span');
            span.textContent = key.toUpperCase();
            span.style.display = 'inline-block';
            span.style.width = '24px';
            span.style.height = '24px';
            span.style.lineHeight = '24px';
            span.style.textAlign = 'center';
            span.style.fontWeight = 'bold';
            span.style.borderRadius = '4px';
            span.style.background = spanBgToggle ? '#ddbd4e' : '#6c6f6f';
            switch (key) {
                case 'p':
                    span.style.color = '#FF8EFF';
                    break;
                case 'k':
                    span.style.color = '#65CAFC';
                    break;
                case 's':
                    span.style.color = '#36E79D';
                    break;
                case 'h':
                    span.style.color = '#F03030';
                    break;
                case 'd':
                    span.style.color = '#FD9930';
                    break;
            }
            output.appendChild(span);
        }
        updateOutputImages();
    }
});