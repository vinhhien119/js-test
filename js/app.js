// build the nav
let sections = document.querySelectorAll("section");
console.log(sections)
let text = [];
let Idarray = [];
for (const section of sections) {
    text.push(section.querySelector('h2').innerText);
    Idarray.push(section.id);
}

let navbar = document.getElementById('navbar__list');
let i = 0;
for (const TextElement of text) {
    const node = document.createElement("li");
    const node2 = document.createElement("a")
    node2.href = `#${Idarray[i]}`;
    node.appendChild(node2);
    node2.textContent = TextElement;
    node2.classList.add("menu__link");
    navbar.appendChild(node);
    i += 1;
}

// Scroll spy 
let scrolling;
let navLinks = document.querySelectorAll("a.menu__link") 
window.onscroll = () => {
    window.clearTimeout( scrolling );
    document.getElementById('navbar__list').classList.remove('not-display')
	// Set a timeout to run after scrolling ends
	scrolling = setTimeout(function() {
		// Run the callback
		console.log('stop');
        document.getElementById('navbar__list').classList.add('not-display');

	}, 5000);
    checkActiveSection();

    displayBackToTop();
    
}
// Back to top button
function displayBackToTop() {
    console.log(document.querySelector('footer').offsetTop);
    let good_time = document.querySelector('footer').offsetTop - (window.innerHeight);
    console.log(good_time);
    if (window.scrollY > good_time) {
        document.getElementById('back-to-top').style.display = 'block'; 
        // console.log(true);
    } else {
        document.getElementById('back-to-top').style.display = 'none';
        // console.log(false)
    }
}

// Check active seciton
function checkActiveSection() {
    sections.forEach(section => {
        let top = window.scrollY;
        console.log(top)
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id')


        if (top > offset && top < offset + height ) {
            navLinks.forEach (n => {
                // console.log(id)
                // console.log(offset)
                // console.log(offset + height)
                n.classList.remove('active')
            })
            document.querySelector('a[href *= '+ id +']').classList.add('active')
        }
    })
}

function scrollToTop() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}

