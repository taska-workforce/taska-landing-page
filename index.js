document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.getElementById('about-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('.learn-more').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('#contact-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

    document.getElementById('get-started').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact-form').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const typingText1 = "Utilizing state-of-the-art heuristic algorithms";
    const typingText2 = "to elevate your website’s customer engagement";
    let i1 = 0, i2 = 0;
    const speed = 50; // Speed of typing in milliseconds

    function typeWriter1() {
        if (i1 < typingText1.length) {
            document.getElementById('typing-text2').classList.add('finished');
            document.getElementById('typing-text1').innerHTML += typingText1.charAt(i1);
            i1++;
            setTimeout(typeWriter1, speed);
        } else {
            document.getElementById('typing-text2').classList.remove('finished');
            document.getElementById('typing-text1').classList.add('finished');
            typeWriter2(); // Start the second line typing after the first line finishes
        }
    }

    function typeWriter2() {
        if (i2 < typingText2.length) {
            document.getElementById('typing-text2').innerHTML += typingText2.charAt(i2);
            i2++;
            setTimeout(typeWriter2, speed);
        } else {
            document.getElementById('typing-text2').classList.add('finished'); // Ensure the cursor stops after typing is complete
        }
    }

    typeWriter1(); // Start the typing effect for the first line
});
