document.querySelectorAll('.faq h2').forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.nextElementSibling;
        
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            document.querySelectorAll('.faq p').forEach(p => p.classList.remove('open')); // Close other answers
            answer.classList.add('open');
        }
    });
});
