var quotes_array = [
  { quote: "Now is the summer of our discontent", author: "Shakespeare" },
  { quote: "Go away!", author: "Matt Healy" },
  { quote: "Classic Steve...", author: "Cohort 9" }
];


var app = function(){
  changeTagline();
  hideQuoteOTD();
  addQuotes(quotes_array);
  quoteColour();
  headColour();
}

var headColour = function() {
  document.getElementById('head').style.backgroundColor = "#0051CC";
}

var changeTagline = function(){
  const tagline = document.getElementById('tagline');
  tagline.innerHTML = "aye while your maw punts cooncil";
}

var hideQuoteOTD = function(){
  document.getElementById('quote-of-the-day').style.visibility = "hidden";
}

var quoteColour = function() {
  document.getElementById('quotes').style.backgroundColor = "DodgerBlue";
}

var addQuotes = function(quotes_array){
  var location = document.getElementById('quotes');
  quotes_array.forEach(function(element){
    var newCite = document.createElement("cite")
    newCite.innerText = element.author;
    var newBlockQuote = document.createElement("blockquote")
    newBlockQuote.innerText = element.quote;
    var newArticle = document.createElement("article")


    newBlockQuote.appendChild(newCite);

    newArticle.appendChild(newBlockQuote);
    location.appendChild(newArticle);
  })



}

// var elementsAsStrings = function(){
//   return quotes_array.forEach(function(element){
//     return `${element.quote}, by ${element.author}`;
//   })
// }

// var quoteDisplayNewLine = function(){
//   var newQuotes =  quotes_array.join("<br />");
//   return newQuotes;
// }
//
// var changeQuotes = function(){
//   const quotes = document.getElementById('');
//   quotes.innerHTML = elementsAsStrings();
// }

document.addEventListener("DOMContentLoaded", app);
