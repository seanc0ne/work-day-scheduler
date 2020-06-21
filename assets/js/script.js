var times = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
];

var container = $('.container');
var row, col;

for (var i = 0, i < times.length; i++) {
    row = $('<div></div>').addClass('row');
    row.addClass('time-slot');

    col = $('<div></div>').addClass('col');
    col.html(times[i]);

    row.append(col);

    col = $('<div></div>').addClass('col-10');
    col.html('Put data here');

    row.append(col);

    col = $('<div></div>').addClass('col');
    col.html('Edit');
}