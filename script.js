// Open an app
function openApp(appId) {
    document.getElementById(appId).style.display = 'block';
}

// Close an app
function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
}

// Show Time in Menu Bar
function updateTime() {
    const timeEl = document.getElementById('time');
    const now = new Date();
    timeEl.innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Make Windows Movable
document.querySelectorAll('.window').forEach(window => {
    let isDragging = false, offsetX, offsetY;

    window.querySelector('.title-bar').addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = `${e.clientX - offsetX}px`;
            window.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
