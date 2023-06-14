var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["MON"] = 100] = "MON";
    daysOfTheWeek[daysOfTheWeek["TUE"] = 101] = "TUE";
    daysOfTheWeek[daysOfTheWeek["WED"] = 102] = "WED";
    daysOfTheWeek[daysOfTheWeek["THU"] = 103] = "THU";
    daysOfTheWeek[daysOfTheWeek["FRI"] = 104] = "FRI";
    daysOfTheWeek[daysOfTheWeek["SAT"] = 105] = "SAT";
    daysOfTheWeek[daysOfTheWeek["SUN"] = 106] = "SUN";
})(daysOfTheWeek || (daysOfTheWeek = {}));
var day;
day = daysOfTheWeek.MON;
if (day == daysOfTheWeek.MON) {
    console.log("go to the work");
}
