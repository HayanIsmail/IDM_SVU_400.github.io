document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = 'Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Dynamic Year in Footer
    const yearSpan = document.createElement('span');
    yearSpan.innerText = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    footer.appendChild(yearSpan);
});
