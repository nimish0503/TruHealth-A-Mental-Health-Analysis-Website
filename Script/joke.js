const btn = document.getElementById('joke_btn')
const btn2 = document.getElementById('quote_btn')
const joke = document.getElementById('joke');
const quote = document.getElementById('quote');
const jokeText = document.querySelector('.joke-text');
const quoteText = document.querySelector('.quote-text');
const quoteTextAuthor = document.querySelector('.quote-text--author');
const btnJokeCopy = document.getElementById('joke_btn_copy');
const btnQuoteCopt = document.getElementById('quote_btn_copy');

jokeText.textContent = 'Click to get a joke. Share it with your friends!';
quoteText.textContent = 'Click to get a quote. Share it with your friends!';

btn.addEventListener('click', getJoke, true)

async function getJoke() {
    btn.classList.add('clicked');
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const json = await response.json();
    jokeText.textContent = json.joke;
}


btn2.addEventListener('click', getQuote, true)

async function getQuote() {
    // Fetch a random quote from the API
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    // Display the quote and author
    quoteText.textContent = data.content;
    
    if (data.author) {
        quoteTextAuthor.textContent = `By ${data.author}`;
    } else {
        quoteTextAuthor.textContent = 'Unknown';
    }
}

// Call the function to get a random quote
getQuote();



btnJokeCopy.onclick = function () {
    let input = joke.textContent.trim();
    navigator.clipboard.writeText(input);
}

btnQuoteCopt.onclick = function () {
    let input = quote.textContent.trim();
    navigator.clipboard.writeText(input);
}

