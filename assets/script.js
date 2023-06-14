// global variables 

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

// selects text areas for each hour on schedule
var nineAmInput = $('#input-09');
var tenAmInput = $('#input-10');
var elevenAmInput = $('#input-11');
var twelvePmInput = $('#input-12');
var onePmInput = $('#input-13');
var twoPmInput = $('#input-14');
var threePmInput = $('#input-15');
var fourPmInput = $('#input-16');
var fivePmInput = $('#input-17');

// creates a variable that holds current hour, comparing hour on schedule to this variable changes each time block's color
var now = dayjs().format('HH');

// functions

// displays the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// updates the time every second
setInterval(displayTime, 1000);

// calls function that displays current time
displayTime();


// event listeners for all buttons and render appt function for all time blocks
// 9 am
  nineAmButton.on('click', function(event) {
    event.preventDefault();
    var nineAmAppt = nineAmInput.val();
    localStorage.setItem('9 am', JSON.stringify(nineAmAppt));
  });

  function render9AmAppt() {
    var nineAmApptDisplay = JSON.parse(localStorage.getItem('9 am'));
    if (nineAmApptDisplay !== null) {
    nineAmInput.text(nineAmApptDisplay);
    }
  }
  
// 10 am
  tenAmButton.on('click', function(event) {
    event.preventDefault();
    var tenAmAppt = tenAmInput.val();
    localStorage.setItem('10 am', JSON.stringify(tenAmAppt));
  });

  function render10AmAppt() {
    var tenAmApptDisplay = JSON.parse(localStorage.getItem('10 am'));
    if (tenAmApptDisplay !== null) {
    tenAmInput.text(tenAmApptDisplay);
    }
  }

// 11 am
  elevenAmButton.on('click', function(event) {
    event.preventDefault();
    var elevenAmAppt = elevenAmInput.val();
    localStorage.setItem('11 am', JSON.stringify(elevenAmAppt));
  });

  function render11AmAppt() {
    var elevenAmApptDisplay = JSON.parse(localStorage.getItem('11 am'));
    if (elevenAmApptDisplay !== null) {
    elevenAmInput.text(elevenAmApptDisplay);
    }
  }

// 12 pm
  twelvePmButton.on('click', function(event) {
    event.preventDefault();
    var twelvePmAppt = twelvePmInput.val();
    localStorage.setItem('12 pm', JSON.stringify(twelvePmAppt));
  });

  function render12PmAppt() {
    var twelvePmApptDisplay = JSON.parse(localStorage.getItem('12 pm'));
    if (twelvePmApptDisplay !== null) {
    twelvePmInput.text(twelvePmApptDisplay);
    }
  }

// 1 pm
  onePmButton.on('click', function(event) {
    event.preventDefault();
    var onePmAppt = onePmInput.val();
    localStorage.setItem('1 pm', JSON.stringify(onePmAppt));
  });

  function render1PmAppt() {
    var onePmApptDisplay = JSON.parse(localStorage.getItem('1 pm'));
    if (onePmApptDisplay !== null) {
    onePmInput.text(onePmApptDisplay);
    }
  }

// 2 pm
  twoPmButton.on('click', function(event) {
    event.preventDefault();
    var twoPmAppt = twoPmInput.val();
    localStorage.setItem('2 pm', JSON.stringify(twoPmAppt));
  });

  function render2PmAppt() {
    var twoPmApptDisplay = JSON.parse(localStorage.getItem('2 pm'));
    if (twoPmApptDisplay !== null) {
    twoPmInput.text(twoPmApptDisplay);
    }
  }

// 3 pm
  threePmButton.on('click', function(event) {
    event.preventDefault();
    var threePmAppt = threePmInput.val();
    localStorage.setItem('3 pm', JSON.stringify(threePmAppt));
  });

  function render3PmAppt() {
    var threePmApptDisplay = JSON.parse(localStorage.getItem('3 pm'));
    if (threePmApptDisplay !== null) {
    threePmInput.text(threePmApptDisplay);
    }
  }

// 4 pm
  fourPmButton.on('click', function(event) {
    event.preventDefault();
    var fourPmAppt = fourPmInput.val();
    localStorage.setItem('4 pm', JSON.stringify(fourPmAppt));
  });

  function render4PmAppt() {
    var fourPmApptDisplay = JSON.parse(localStorage.getItem('4 pm'));
    if (fourPmApptDisplay !== null) {
    fourPmInput.text(fourPmApptDisplay);
    }
  }

// 5 pm
  fivePmButton.on('click', function(event) {
    event.preventDefault();
    var fivePmAppt = fivePmInput.val();
    localStorage.setItem('5 pm', JSON.stringify(fivePmAppt));
  });

  function render5PmAppt() {
    var fivePmApptDisplay = JSON.parse(localStorage.getItem('5 pm'));
    if (fivePmApptDisplay !== null) {
    fivePmInput.text(fivePmApptDisplay);
    }
  }


// calls all the functions that render data from local storage so that appts remain displayed after refresh
function renderAllAppts() {
  render9AmAppt();
  render10AmAppt();
  render11AmAppt();
  render12PmAppt();
  render1PmAppt();
  render2PmAppt();
  render3PmAppt();
  render4PmAppt();
  render5PmAppt();
}


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


// calls function that controls color of the time blocks
workDay();

// calls function that calls all functions that print data from local storage to the page
renderAllAppts();