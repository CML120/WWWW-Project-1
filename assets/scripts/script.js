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
});
