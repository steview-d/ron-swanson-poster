const urlAPI = 'http://wron-swanson-quotes.herokuapp.com/v2/quotes';

class quote {
    constructor(url) {
        this.quoteText = url;
    }

    async getQuote() {
        const quoteArea = document.getElementById('quote-text');
        await fetch(this.quoteText)
            .then(response => response.json())
            .then(quote => {
                quoteArea.textContent = quote;
            })
            .catch(err => {
                console.log(err);
                quoteArea.textContent =
                    'If you are reading this, something went wrong. Ron is disappointed.';
            });
    }
}

newQuote = new quote(urlAPI);
newQuote.getQuote();
