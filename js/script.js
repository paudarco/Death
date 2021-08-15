const intro = document.querySelector('.intro'),
      secret = document.querySelector('.secret'),
      dividerSection = document.querySelector('.divider_section'),
      interview = document.querySelector('.interview');

window.addEventListener('DOMContentLoaded', () => {
    intro.classList.remove('hide');
    intro.classList.add('fade', 'show');
});

function showSection(block) {
    if (window.pageYOffset >= block.offsetTop - 350) {
        block.classList.remove('hide');
        block.classList.add('fade', 'show');
    }
}

function removeListener(block, func) {
    if (window.pageYOffset >= block.offsetTop - 349) {
        window.removeEventListener('scroll', func);
    }
}

window.addEventListener('scroll', function showSecret() {
    showSection(secret);
    removeListener(secret, showSecret);
});

window.addEventListener('scroll', function showDividerSection() {
    showSection(dividerSection);
    removeListener(dividerSection, showDividerSection);
});

window.addEventListener('scroll', function showInterview() {
    showSection(interview);
    removeListener(interview, showInterview);
});



