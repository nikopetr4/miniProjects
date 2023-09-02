$(document).ready(function() {
    $('#submit').on('click', function(){
        var selectedDate = new Date($('#datepicker').val());
        
        if(selectedDate.toString() === 'Invalid Date'){
            $('.error').text('No date is inserted.');
            $('.error').css('fontSize','16px')
        } else {
        var currentDate = new Date();
        var myYear = selectedDate.getFullYear();
        var currentYear = currentDate.getFullYear();
        var nextBirthday = new Date("2024-01-15");

        var milli_secs = currentDate.getTime() - selectedDate.getTime();
             
        var days = Math.floor(milli_secs / (1000 * 3600 * 24));
        var weeks = Math.floor(days / 7);

        var years = currentYear - myYear;
        var months = (years * 12) + currentDate.getMonth() - selectedDate.getMonth(); 
        var millisecsLeft = nextBirthday.getTime() - currentDate.getTime();
        var daysLeft = Math.ceil(millisecsLeft / (1000 * 3600 * 24));

        var daysNow = currentDate.getDate() - selectedDate.getDate();
        var currentMonth = currentDate.getMonth();

        $('#years').text(years);
        $('#months').text(currentMonth);
        $('#days').text(daysNow);
        $('#yearsLived').append(years);
        $('#monthsLived').append(months);
        $('#daysLived').append(days);
        $('#weeks').append(weeks);
        $('#daysLeft').append(daysLeft);
        }
    });

});