window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Select your sections
    const navlinks = document.querySelectorAll('header nav a'); // Select your nav links

    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                // Make sure this selector is correct and returns an element
                const targetLink = document.querySelector('header nav a[href*=' + id + ']'); 
                if (targetLink) { // Check if the element exists
                    targetLink.classList.add('active');
                }
            });
        };
    });
});

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => { // Corrected to 'forEach'
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight; // Corrected to 'offsetHeight'
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']').classList.add('active');
            })
            
        };
    })
}

// ... rest of your code ...

var typed = new Typed(".text", {
    strings: ["Frontend Developer"], // Note: 'strings' should be lowercase
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
