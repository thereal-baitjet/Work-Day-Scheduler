var nowHour = moment().hour()
var selectRow = document.getElementsByClassName("time-block")

// Displays the current date

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY');

$(document).ready(function () {
    // saveBtn click listener 

$(".saveBtn").on("click", function () {

        // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
  
        // Save text in local storage
    localStorage.setItem(time, text);
})

// this function syncs the time to the textarea and makes it color code to state of time
function timeChecker() {
    for (i = 0; i < 9; i++) {
    var rowTime = parseInt(selectRow[i].getAttribute("id"))
    if (rowTime === nowHour) {
        selectRow[i].classList.add("present")
    } else if (rowTime < nowHour) {
        selectRow[i].classList.add("past")
    } else {
        selectRow[i].classList.add("future")
    }
}
    }

timeChecker()

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));

})