var formEl = $("#format")
var inputEl = $("#search")
var submitBtn = $(".btn")
var cardEl = $(".card")
var cardLinkEl = $(".card-link")

var formSubmit = function (event) {
    event.preventdefault();

    var userInput = inputEl.value.trim();
    
    if (userInput) {
        getSearch(userInput)
        console.log(userInput)
    } else if (userInput) {
        getFormat(userInput)
    } else {
        inputEl.textContent = ""
        alert("Please enter a valid search");
    }
}

var getSearch = function (q) {
    var searchUrl = 'https://www.loc.gov/search/?q=' + q + '&fo=json';
    
    fetch(searchUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, q);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
  };

  var getFormat = function (format) {
    var searchUrl = 'https://www.loc.gov/' + format + '/?q=' + q + '&fo=json';
    
    fetch(searchUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, format);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to');
      });
  };

  submitBtn.on("submit", function(){
    formSubmit();
  });
  