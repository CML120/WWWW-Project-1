$(document).ready(function () {
  // Hiding div with attractions card because there are no events to show
  $(attractions).hide();
  getSearchedKeyword();
  autoKeywords();
  // Function to when the search button is clicked
  $("#searchBtn").click(function (e) {
    e.preventDefault();
    deleteAppends();

    if ($("#user-input").val() == "") {
      $(attractions).hide();
      getSearchedKeyword();
    } else {
      var userinput = $("#user-input").val();
      artistName = userinput;
      getEventByKeyword(userinput);
      getSearchedKeyword();
    }
  });
  // Function to when any li (previous searched keywords) is clicked
  $(document).on("click", "li", function (e) {
    e.preventDefault();
    deleteAppends();
    // Saving clicked keyword into variable to be passed into function that gets events info for keyword searched and shows previous searched keyword if any
    var userinput = $(this).text();
    artistName = userinput;
    getEventByKeyword(userinput);
    getSearchedKeyword();
  });
});

function autoKeywords() {
  var availableKeyword = [
    "Jazz",
    "Pop Music",
    "Rock",
    "Country",
    "Reggae",
    "Hip Hop",
    "Pop Rock",
    "Blues",
  ];
  $("#user-input").autocomplete({
    source: availableKeyword,
    minLength: 3,
  });
}

// Function to call Ticketmaster API with keyword as query parameter
function getEventByKeyword(userinput) {
  // Variable to house Ticketmaster API key
  var apiKey = "aSqzhWcc1ZxQnMoClqxGxcTRL8GrgFyA";
  // Variable to house Ticketmaster API URL
  var eventsUrl =
    "https://app.ticketmaster.com/discovery/v2/events?apikey=" +
    apiKey +
    "&keyword=" +
    userinput;
  fetch(eventsUrl);
}
