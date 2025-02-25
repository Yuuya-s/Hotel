const btns = document.querySelectorAll('.tabheader__item');
const tab_content_paragraph = document.querySelector('.tab_content_p1');
const tab_content_img = document.querySelector('.tab_content_img');
const contact_Days = document.querySelector('#days');
const contact_Hours = document.querySelector('#hours');
const contact_Minutes = document.querySelector('#minutes');
const contact_Seconds = document.querySelector('#seconds');

const galleryNextBtn = document.querySelector('.offer__slider-next');
const galleryPrevBtn = document.querySelector('.offer__slider-prev');
const galleryCurrent = document.querySelector('#current');
const galleryTotal = document.querySelector('#total');
const galleryImg = document.querySelector('#offer__slide_img');
const galleryName = document.querySelector('.offer__slide_name');
const galleryDescription = document.querySelector('.offer__slide_p');

// Tab Switching
const paragraphChanger = (city) => {
    tab_content_paragraph.innerHTML = `<b>${city}</b> Warning: This gallery may cause extreme hunger! Feast your eyes on our drool-worthy dishes, bursting with flavors that will make your cravings unstoppable. Who’s ready to dig in?`;
};

const remove_class = () => {
    btns.forEach(btn => btn.classList.remove('tabheader__item_active'));
};

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        remove_class();
        btn.classList.add('tabheader__item_active');

        const cities = ['Paris', 'London', 'Dubai', 'Moscow', 'Tashkent'];
        const images = ['./img/paris.png', './img/london.png', './img/dubai.png', './img/moscow.png', './img/tashkent.png'];

        paragraphChanger(cities[index]);
        tab_content_img.src = images[index];
    });
});

// Gallery Items
let currentCount = 0;
const foodNames = [
    'Fun & Playful',
    'A Global Feast',
    'Sweet Temptations',
    'Fresh & Wholesome',
    'Our Food Gallery 5',
];
const foodDescription = [
    'A celebration of fine dining awaits! Experience the elegance of gastronomy with our handpicked selection of beautifully crafted dishes. Every bite is a journey of taste and creativity.',
    'Step into a world of flavors! From sizzling street food to gourmet delights, our collection takes you on a journey across cultures. Discover the magic of global cuisine, one delicious bite at a time.',
    'Got a sweet tooth? This gallery is dedicated to irresistible desserts and heavenly treats. From delicate pastries to rich, chocolatey delights, every bite is pure indulgence.',
    'Healthy can be delicious! Dive into a gallery of fresh, vibrant, and nourishing meals crafted with the finest ingredients. From colorful salads to hearty bowls, enjoy food that makes you feel good inside and out.',
    'Experience the artistry of our chefs! This gallery showcases signature dishes, each carefully designed to surprise and delight. Creative, bold, and full of flavor—every plate is a masterpiece!',
];
const foodImgs = [
    './img/gallery1.jpeg',
    './img/gallery2.jpeg',
    './img/gallery3.jpeg',
    './img/gallery4.jpeg',
    './img/gallery5.jpeg',
];

const changeGalleryItems = (currentCount) => {
    galleryCurrent.textContent = currentCount + 1;
    galleryTotal.textContent = foodNames.length;
    galleryImg.src = `${foodImgs[currentCount]}`;
    galleryName.textContent = `${foodNames[currentCount]}`;
    galleryDescription.innerHTML = `${foodDescription[currentCount]}`;
};

galleryCurrent.textContent = currentCount + 1;
galleryTotal.textContent = foodNames.length;

galleryNextBtn.addEventListener('click', () => {
    currentCount = (currentCount + 1) % foodImgs.length;
    changeGalleryItems(currentCount);
});

galleryPrevBtn.addEventListener('click', () => {
    currentCount = (currentCount - 1 + foodImgs.length) % foodImgs.length;
    changeGalleryItems(currentCount);
});

// Countdown Timer
function getDayOfYearFromMonthAndDay(month, day) {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const date = new Date(new Date().getFullYear(), month - 1, day);
    const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getTodayDayOfYear() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear + (startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function startCountdown() {
    setInterval(() => {
        const now = new Date();
        const dayNumber = getDayOfYearFromMonthAndDay(5, 12); // May 12th
        let daysLeft = dayNumber - getTodayDayOfYear();

        if (daysLeft < 0) daysLeft += 365; // Adjust for past date

        contact_Seconds.textContent = 59 - now.getSeconds();
        contact_Minutes.textContent = 59 - now.getMinutes();
        contact_Hours.textContent = 23 - now.getHours();
        contact_Days.textContent = daysLeft;
    }, 1000);
}

startCountdown();
