const API_KEY = '&key=AIzaSyAMpp6VaxsOkTAU0UHfzAvFeHU5J2gwUjo';
const API = 'https://www.googleapis.com/books/v1/volumes?q=';

const input = document.querySelector('#search');
const searchButton = document.querySelector('#btn-search');

//!Search Button 
searchButton.addEventListener('click', () => {
    const URL = API + input.value + API_KEY;
    getBooks(URL);
    document.querySelector(".card-books .right-side .content").innerHTML = '';
})

//! Fetch the Data
async function getBooks(url) {
    const res = await fetch(url);
    const books = await res.json();
    show(books.items);
}

//! Show Data
function show(data) {
    data.forEach(item => {
        let { volumeInfo } = item;
        let element = document.createElement('div');
        element.classList.add('flex');
        element.classList.add('gap-2');
        element.classList.add('flex-column');
        element.innerHTML =
            `
            <img src="${volumeInfo.imageLinks?.thumbnail ? volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/200x200'}" alt="book">
            <div class="flex flex-column  content-info">
                <h4>${volumeInfo.title}</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <span>5</span>
                </div>
                <p>${volumeInfo.authors ? volumeInfo.authors[0] : 'Author Not Found'}</p>
                <div class="price">${randomPrice()}</div>
            </div>
        `
        document.querySelector(".card-books .right-side .content").insertAdjacentElement('afterbegin', element);
    });
}

function randomPrice(max = 30, min = 5) {
    return (Math.random() * (max - min) + min).toFixed(2) + '$';
}