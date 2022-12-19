// Define a function to determine the current season
function getCurrentSeason() {
    // Get the current month
    var month = new Date().getMonth();

    // Set the season based on the month
    if (month >= 3 && month <= 5) {
      return "spring";
    } else if (month >= 6 && month <= 8) {
      return "summer";
    } else if (month >= 9 && month <= 11) {
      return "autumn";
    } else {
      return "winter";
    }
  }

  // Use the function to determine the current season
  var currentSeason = getCurrentSeason();

  // Update the page to display the current season
  document.getElementById("season").innerHTML = currentSeason;
