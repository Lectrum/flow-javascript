const code = document.getElementById('code');
const toggle = document.getElementById('toggle');
const reset = document.getElementById('reset');

let lapsed = 0;
let isRunning = false;
let timer = null;

const updateButtonText = () => {
    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';
    toggle.innerHTML = buttonText;
};

const toggleRun = () => {
    if (isRunning) {
        clearInterval(timer);
    } else {
        const startTime = Date.now() - lapsed;
        timer = setInterval(() => {
            lapsed = Date.now() - startTime;
            code.innerHTML = `${lapsed} мс`;
        }, 0);
    }

    isRunning = !isRunning;
    updateButtonText();
};

const resetTimer = () => {
    clearInterval(timer);
    lapsed = 0;

    code.innerHTML = `${lapsed} мс`;
    isRunning = false;
    updateButtonText();
};

toggle.addEventListener('click', toggleRun);
reset.addEventListener('click', resetTimer);
