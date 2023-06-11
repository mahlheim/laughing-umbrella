// selects bigger html elements
var timeDisplayEl = $('#currentDay');
var scheduleHour = $('time-block');
var textArea = $('textarea');

// selects each time block
var nineAm = $('#09');
var tenAm = $('#10');
var elevenAm = $('#11');
var twelvePm = $('#12');
var onePm = $('#13');
var twoPm = $('#14');
var threePm = $('#15');
var fourPm = $('#16');
var fivePm = $('#17');

// selects each save button
var nineAmButton = $('#button-09');
var tenAmButton = $('#button-10');
var elevenAmButton = $('#button-11');
var twelvePmButton = $('#button-12');
var onePmButton = $('#button-13');
var twoPmButton = $('#button-14');
var threePmButton = $('#button-15');
var fourPmButton = $('#button-16');
var fivePmButton = $('#button-17');

// creates a variable that holds current hour, comparing hour on schedule to this variable changes each time block's color
var now = dayjs().format('HH');

// displays the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// updates the time every second
setInterval(displayTime, 1000);

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?













// applies past, present, or future class to each time block by comparing the id to the current hour
function workDay() {
  var nineAmCompare = $(nineAm).attr("id");
      if (now === nineAmCompare) {
        nineAm.addClass('present');
      } else if (now < nineAmCompare) {
        nineAm.addClass('future');
      } else if (now > nineAmCompare) {
        nineAm.addClass('past');
      };
  
  var tenAmCompare = $(tenAm).attr("id");
      if (now === tenAmCompare) {
        tenAm.addClass('present');
      } else if (now < tenAmCompare) {
        tenAm.addClass('future');
      } else if (now > tenAmCompare) {
        tenAm.addClass('past');
      };

  var elevenAmCompare = $(elevenAm).attr("id");
      if (now === elevenAmCompare) {
        elevenAm.addClass('present');
      } else if (now < elevenAmCompare) {
        elevenAm.addClass('future');
      } else if (now > elevenAmCompare) {
        elevenAm.addClass('past');
      };

  var twelvePmCompare = $(twelvePm).attr("id");
      if (now === twelvePmCompare) {
        twelvePm.addClass('present');
      } else if (now < twelvePmCompare) {
        twelvePm.addClass('future');
      } else if (now > twelvePmCompare) {
        twelvePm.addClass('past');
      };
  
  var onePmCompare = $(onePm).attr("id");
      if (now === onePmCompare) {
        onePm.addClass('present');
      } else if (now < onePmCompare) {
        onePm.addClass('future');
      } else if (now > onePmCompare) {
        onePm.addClass('past');
      };

  var twoPmCompare = $(twoPm).attr("id");
      if (now === twoPmCompare) {
        twoPm.addClass('present');
      } else if (now < twoPmCompare) {
        twoPm.addClass('future');
      } else if (now > twoPmCompare) {
        twoPm.addClass('past');
      };

  var threePmCompare = $(threePm).attr("id");
      if (now === threePmCompare) {
        threePm.addClass('present');
      } else if (now < threePmCompare) {
        threePm.addClass('future');
      } else if (now > threePmCompare) {
        threePm.addClass('past');
      };

  var fourPmCompare = $(fourPm).attr("id");
      if (now === fourPmCompare) {
        fourPm.addClass('present');
      } else if (now < fourPmCompare) {
        fourPm.addClass('future');
      } else if (now > fourPmCompare) {
        fourPm.addClass('past');
      };

  var fivePmCompare = $(fivePm).attr("id");
      if (now === fivePmCompare) {
        fivePm.addClass('present');
      } else if (now < fivePmCompare) {
        fivePm.addClass('future');
      } else if (now > fivePmCompare) {
        fivePm.addClass('past');
      };
};

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

// calls function that displays current time
displayTime();

// calls function that controls color of the time blocks
workDay();