
var today = new Date();
$('#time').html( today.getHours() + ':' + today.getMinutes());
$('#date').html( today.toDateString() );