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

const paris = btns[0];
const london = btns[1];
const dubai = btns[2];
const moscow = btns[3];
const tashkent = btns[4];

const paragraphChanger = (city) => {
    tab_content_paragraph.innerHTML = `<b>${city}</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quibusdam saepe natus numquam dolorum aliquam ducimus molestias tenetur? Quaerat, atque blanditiis. Debitis voluptatem sequi quibusdam nihil eveniet obcaecati soluta rem.
    <br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt aspernatur earum sequi consequatur, quasi iste quod nam esse adipisci neque commodi voluptate deserunt architecto rerum. Blanditiis labore sed sapiente.`
}

const remove_class = () => {
    btns.forEach(btn => btn.classList.remove('tabheader__item_active'));
}

paris.addEventListener('click', () => {
    remove_class();
    paris.classList.add('tabheader__item_active');
    paragraphChanger('Paris');
    tab_content_img.src = "./img/paris.png";
});

london.addEventListener('click', () => {
    remove_class();
    london.classList.add('tabheader__item_active');
    paragraphChanger('London');
    tab_content_img.src = "./img/london.png";
});

dubai.addEventListener('click', () => {
    remove_class();
    dubai.classList.add('tabheader__item_active');
    paragraphChanger('Dubai');
    tab_content_img.src = "./img/dubai.png";
});

moscow.addEventListener('click', () => {
    remove_class();
    moscow.classList.add('tabheader__item_active');
    paragraphChanger('Moscow');
    tab_content_img.src = "./img/moscow.png";
});

tashkent.addEventListener('click', () => {
    remove_class();
    tashkent.classList.add('tabheader__item_active');
    paragraphChanger('Tashkent');
    tab_content_img.src = "./img/tashkent.png";
});

// Gallery Items //
let currentCount = 0;
const foodNames = [
    'Our Food Gallery 1',
    'Our Food Gallery 2',
    'Our Food Gallery 3',
    'Our Food Gallery 4',
    'Our Food Gallery 5'
];
const foodDescription = [
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat? <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat?`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat? <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat?`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat? <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat?`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat? <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat?`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat? <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati ea maxime esse suscipit at veritatis corporis, est dicta repellat cupiditate. Cupiditate corrupti illum, necessitatibus saepe non ab placeat fugiat?`
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
}

galleryCurrent.textContent = currentCount + 1;
galleryTotal.textContent = foodNames.length;
galleryNextBtn.addEventListener('click', () => {
    currentCount = (currentCount + 1) % foodImgs.length;
    changeGalleryItems(currentCount);
});

galleryPrevBtn.addEventListener('click', () => {
    currentCount = (currentCount - 1) % foodImgs.length;
    if (currentCount < 0) {
        currentCount = 4;
    }
    changeGalleryItems(currentCount);
});

// Control Contact Time \\

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
        const dayNumber = getDayOfYearFromMonthAndDay(5, 12); // may, 12 => 13-may
        const daysLeft = dayNumber - getTodayDayOfYear();

        contact_Seconds.textContent = 59 - now.getSeconds();
        contact_Minutes.textContent = 59 - now.getMinutes();
        contact_Hours.textContent = 23 - now.getHours();
        contact_Days.textContent = daysLeft;

    }, 1000);
}

startCountdown();
