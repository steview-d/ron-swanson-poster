const urlAPI = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

class quote {
    constructor(url) {
        this.quoteUrl = url;
    }

    getQuote() {
        const quoteArea = document.getElementById('quote-text');
        fetch(this.quoteUrl)
            .then(response => response.json())
            .then(quoteText => {
                quoteArea.textContent = quoteText;
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

$("#refresh-icon").on("click", function(){
    newQuote.getQuote()
});
