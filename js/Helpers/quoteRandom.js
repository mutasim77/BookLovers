//! Fetch the Data from API
async function getQuotes(url) {
    const res = await fetch(url);
    const quotes = await res.json();
    show(quotes);
}
getQuotes("https://type.fit/api/quotes");

let counter = 0;
function show(quotes) {
    let arr = quotes;
    $('.quotes button').on('click', () => {
        counter++;
        $('.quotes q').text(arr[counter].text);
    });
}