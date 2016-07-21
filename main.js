$('.show-skills').on('click', function () {
  $('.skills').show();
  $('.show-skills').hide();
});

// Shows today's date
var today = new Date();
var todaysDate = today.getDate();
var todaysDayOfWeek = today.getDay();
var thursday = 4;
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var dateInfo = $('.date-info');
dateInfo.append('The time right now is: ' + today);
dateInfo.append("<br>");
dateInfo.append(today.setDate(todaysDate - 1));
dateInfo.append(`This time yesterday was: ${today}</span><br>`);
if (todaysDayOfWeek == thursday) {
  dateInfo.append("Today is Thursday, time to learn to code!");
} else if (todaysDayOfWeek > thursday) {
  dateInfo.append("You missed this week's class!");
} else {
  dateInfo.append("Come to class this Thursday!");
}
