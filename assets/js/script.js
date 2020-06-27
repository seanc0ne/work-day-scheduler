// Array of times using military time as integers
var times = [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
];

// Bind to the existing container div
var container = $('.container');
var row, col;

// Loop through the times, create rows with specific columns
for (var i = 0; i < times.length; i++) {
    let rowTime = moment({hour: times[i]});
    let currentHourTime = (moment().startOf('hour'));

    row = $('<div></div>').addClass('row');
    row.addClass('time-slot');

    // Color-coding the rows via classes
    if (rowTime.isBefore(currentHourTime)){
        row.addClass('past');
    } else if(rowTime.isAfter(currentHourTime)) {
        row.addClass('future');
    } else {
        row.addClass('present');
    }

    // First column
    col = $('<div></div>').addClass('col');
    col.addClass('hour');
    col.html(rowTime.format("h:mm a"));

    row.append(col);

    // Second column
    col = $('<textarea></textarea>').addClass('col-9').attr("id", times[i].toString());
    col.html('Put data here');

    row.append(col);

    // Third column creating the <div class="saveBtn"></div>
    col = $('<div></div>').addClass('col');
    col.addClass('saveBtn');
    // col.addClass('fa');
    // col.addClass('fa-save');

    let italicsIcon = $('<i></i>').addClass('fa').addClass('fa-save');
    col.append(italicsIcon);

    col.attr("title", times[i].toString());
    // col.html('Save');

    row.append(col);

    // Append the row to the container
    container.append(row);
}


// Show current date at the top of the page
var currentDate = new Date();
var rightNow = moment().format('dddd, MMMM Do');
$('#currentDay').html(rightNow);




// Click the button and save to local storage
// Binding click handler to the <div class="saveBtn"></div>
$('.saveBtn').on('click', function() {
    var id = $(this).attr('title');
    
    localStorage.setItem(id, $("#" + id).val());
});




for (var i = 0; i < times.length; i++) {
  var id = times[i].toString();

  var savedText = localStorage.getItem(id);

  if (!savedText) {
    var textToDisplay = "Put data here";
  }
  else {
    var textToDisplay = savedText;
  }

  // Pull from local storage to display the value in each row.
  $("#" + id).html(textToDisplay);
}