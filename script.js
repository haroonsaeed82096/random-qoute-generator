const quoteContainer = document.getElementById('qoute-container');
const quoteText = document.getElementById('qoute');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-qoute');
const loader = document.getElementById('loader');

let apiQuotes = [];


// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;

}

// Show New Quotes
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    if (quote.text.length > 120 ) {
        quoteText.classList.add('long-quote')

    } else {
        quoteText.classList.remove('long-qoute')
    }

    quoteText.textContent = quote.text;
    complete();
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Get Qoute From API
async function getQoute() {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        // Catch Error Here
    }
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQoute(); 