let key = 'AIzaSyC-RPqfZbmnTl_5ESNjmRK6kMrT3cpQzao';
let reqURL = 'https://www.googleapis.com/youtube/v3/search';


function init() {
gapi.client.setApiKey(key);
gapi.client.load('youtube', 'v3', function() {
    //api is ready
    request();
});

function request() {
  let q = document.querySelector('#searchVid').value;
  let req = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 10
  });
  req.execute(function(response) {
    $('#result').empty()
    let searchitem = response.result.items;
    $.each(searchitem, function(idx, item) {
      vidName = item.snippet.title;
      $('#result').append('<pre>' + vidName + '</pre>');
    })
  });
  }
}

