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
        alert('Unable to connect to GitHub');
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
        alert('Unable to connect to GitHub');
      });
  };
  