let apiQuotes = [];

// Show New Quotes
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Qoute From API
async function getQoute() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        // Catch Error Here
    }
}

// On Load
getQoute(); 