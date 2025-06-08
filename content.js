(function() {
    if (document.querySelector('.dev-telegram-footer')) return;
    const footer = document.createElement('div');
    footer.className = 'dev-telegram-footer';
    footer.innerHTML = '<a href="https://t.me/maxspeedcuber" target="_blank" style="color:inherit;text-decoration:underline;pointer-events:auto;">телеграм канал разработчика расширения</a>';
    footer.style.pointerEvents = "auto";
    document.body.appendChild(footer);
})();