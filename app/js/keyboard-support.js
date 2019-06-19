// support for keyboard and dark mode
window.addEventListener('keydown', keyboardSupport);
function keyboardSupport(e) {
    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--color-light').trim();
    const colorLight = '#fff';
    const colorDark = '#000';
    const pressBtn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);

    if (e.keyCode === 32 && currentColor === colorLight) {
        root.style.setProperty('--color-light', colorDark);
    } else if (e.keyCode === 32 && currentColor === colorDark) {
        root.style.setProperty('--color-light', colorLight);
    } else if (pressBtn !== null) {
        pressBtn.click();
    } 
}
