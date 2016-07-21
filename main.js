// Shows today's date
var today = new Date();
var todaysDate = today.getDate();
var todaysDayOfWeek = today.getDay();
var thursday = 4;
document.write('The time right now is: ' + today);
document.write("<br>");
today.setDate(todaysDate - 1);
document.write(`This time yesterday was: ${today}</span><br>`);
if (todaysDayOfWeek == thursday) {
  document.write("Today is Thursday, time to learn to code!");
} else if (todaysDayOfWeek > thursday) {
  document.write("You missed this week's class!");
} else {
  document.write("Come to class this Thursday!");
}
