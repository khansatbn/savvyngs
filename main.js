document.querySelectorAll('.question-box h5').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toogle('active');
    });
});

