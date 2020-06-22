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

var container = $('.container');
var row, col;

for (var i = 0; i < times.length; i++) {
    let rowTime = moment({hour: times[i]});
    let currentHourTime = (moment().startOf('hour'));
    console.log(rowTime.format('h:mm a'));

    console.log(rowTime.isBefore(moment()));

    row = $('<div></div>').addClass('row');
    row.addClass('time-slot');

    if (rowTime.isBefore(currentHourTime)){
        row.addClass('past');
    } else if(rowTime.isAfter(currentHourTime)) {
        row.addClass('future');
    } else {
        row.addClass('present');
    }

    col = $('<div></div>').addClass('col');
    col.addClass('hour');
    col.html(rowTime.format("h:mm a"));

    row.append(col);

    col = $('<div></div>').addClass('col-10').addClass(times[i].toString());
    col.html('Put data here');

    row.append(col);

    col = $('<div></div>').addClass('col');
    col.addClass('saveBtn').click(function() {});
    col.attr("title", times[i].toString());
    col.html('Edit');

    row.append(col);

    container.append(row);
}

var currentDate = new Date();
var rightNow = moment().format('dddd, MMMM Do');

$('#currentDay').html(rightNow);

$('.time-slot').on('click', () => {

    console.log("Clicked this", this)


})