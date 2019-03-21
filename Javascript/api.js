let key = 'AIzaSyC-RPqfZbmnTl_5ESNjmRK6kMrT3cpQzao';
let reqURL = 'https://www.googleapis.com/youtube/v3/search';


function init() {
gapi.client.setApiKey(key);
gapi.client.load('youtube', 'v3', function() {
    //api is ready
    request();
});

function request() {
  let searchVid = document.querySelector('#searchVid');
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
  })
}

// /**
//  * This function searches for videos related to the keyword 'dogs'. The video IDs and titles
//  * of the search results are logged to Apps Script's log.
//  *
//  * Note that this sample limits the results to 25. To return more results, pass
//  * additional parameters as documented here:
//  *   https://developers.google.com/youtube/v3/docs/search/list
//  */
// function searchByKeyword() {
//     var results = YouTube.Search.list('id,snippet', {q: searchVid.value, maxResults: 25});
//     for(var i in results.items) {
//       var item = results.items[i];
//       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
//   }

  