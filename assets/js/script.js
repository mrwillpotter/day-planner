// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// renderInput()

// function renderInput() {
//   $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
//   $('#hour-10 textarea').val(localStorage.getItem('hour-10'));
//   $('#hour-11 textarea').val(localStorage.getItem('hour-11'));
//   $('#hour-12 textarea').val(localStorage.getItem('hour-12'));
//   $('#hour-13 textarea').val(localStorage.getItem('hour-13'));
//   $('#hour-14 textarea').val(localStorage.getItem('hour-14'));
//   $('#hour-15 textarea').val(localStorage.getItem('hour-15'));
//   $('#hour-16 textarea').val(localStorage.getItem('hour-16'));
//   $('#hour-17 textarea').val(localStorage.getItem('hour-17'));
// }


$(document).ready(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').on('click', function () {
    var input = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, input)
  })

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  renderInput()

  function renderInput() {
    $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
    $('#hour-10 textarea').val(localStorage.getItem('hour-10'));
    $('#hour-11 textarea').val(localStorage.getItem('hour-11'));
    $('#hour-12 textarea').val(localStorage.getItem('hour-12'));
    $('#hour-13 textarea').val(localStorage.getItem('hour-13'));
    $('#hour-14 textarea').val(localStorage.getItem('hour-14'));
    $('#hour-15 textarea').val(localStorage.getItem('hour-15'));
    $('#hour-16 textarea').val(localStorage.getItem('hour-16'));
    $('#hour-17 textarea').val(localStorage.getItem('hour-17'));
  }

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  timeColor()
  function timeColor() {


    var currentTime = dayjs().format('H')
    var timeArray9 = $('#hour-9').attr('id').toString().split('-')
    var timeArray10 = $('#hour-10').attr('id').toString().split('-')
    var timeArray11 = $('#hour-11').attr('id').toString().split('-')
    var timeArray12 = $('#hour-12').attr('id').toString().split('-')
    var timeArray13 = $('#hour-13').attr('id').toString().split('-')
    var timeArray14 = $('#hour-14').attr('id').toString().split('-')
    var timeArray15 = $('#hour-15').attr('id').toString().split('-')
    var timeArray16 = $('#hour-16').attr('id').toString().split('-')
    var timeArray17 = $('#hour-17').attr('id').toString().split('-')
    
    console.log(currentTime)

    if (timeArray9[1] === currentTime) {
      $('#hour-9').addClass('present')
    }
    else if (timeArray9[1] < currentTime) {
      $('#hour-9').toggleClass('future')
    } else {
      $('#hour-9').toggleClass('past')
    }
    if (timeArray10[1] === currentTime) {
      $('#hour-10').addClass('present')
    }
    else if (timeArray10[1] > currentTime) {
      $('#hour-10').addClass('future')
    } else {
      $('#hour-10').addClass('past')
    }
    if (timeArray11[1] === currentTime) {
      $('#hour-11').addClass('present')
    }
    else if (timeArray11[1] > currentTime) {
      $('#hour-11').addClass('future')
    } else {
      $('#hour-11').addClass('past')
    }
    if (timeArray12[1] === currentTime) {
      $('#hour-12').addClass('present')
    }
    else if (timeArray12[1] > currentTime) {
      $('#hour-12').addClass('future')
    } else {
      $('#hour-12').addClass('past')
    }
    if (timeArray13[1] === currentTime) {
      $('#hour-13').addClass('present')
    }
    else if (timeArray13[1] > currentTime) {
      $('#hour-13').addClass('future')
    } else {
      $('#hour-13').addClass('past')
    }
    if (timeArray14[1] === currentTime) {
      $('#hour-14').addClass('present')
    }
    else if (timeArray14[1] > currentTime) {
      $('#hour-14').addClass('future')
    } else {
      $('#hour-14').addClass('past')
    }
    if (timeArray15[1] === currentTime) {
      $('#hour-15').addClass('present')
    }
    else if (timeArray15[1] > currentTime) {
      $('#hour-15').addClass('future')
    } else {
      $('#hour-15').addClass('past')
    }
    if (timeArray16[1] === currentTime) {
      $('#hour-16').addClass('present')
    }
    else if (timeArray16[1] > currentTime) {
      $('#hour-16').addClass('future')
    } else {
      $('#hour-16').addClass('past')
    }
    if (timeArray17[1] === currentTime) {
      $('#hour-17').addClass('present')
    }
    else if (timeArray17[1] > currentTime) {
      $('#hour-17').addClass('future')
    } else {
      $('#hour-17').addClass('past')
    }
  }
  

  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
});


//use day.js