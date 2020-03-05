// getting user inputs..
var button = document.getElementsByTagName('button')[0];
var eventDate = document.getElementById('eventDate');
var eventTime = document.getElementById('eventTime');
var eventTitle = document.getElementById('eventTitle');
var h1 = document.getElementsByTagName('h1')[0];
var countdown = document.getElementById('countdown');
var userInputs = document.getElementById('userInputs');
var eventStarted = document.getElementById('eventStarted');

// get current time since 1970 ..
// Math.floor() to remove the decimal parts ..
function currentTimeBySecondsFunction(){
    let currentTimeBySeconds = new Date().getTime()/1000;
    return currentTimeBySeconds;
}

// When clicking on the button set the new date and make the calculations
button.onclick = (function(){
    if(!eventTitle.value || !eventDate.value || !eventTime.value){
        alert('Please fill all inputs');
    }
    else{
        // display countdown ..
        countdown.style.visibility = 'visible';
        // hide the userInputs ..
        userInputs.style.display = 'none'
        
        // writing event name..
        h1.innerHTML = eventTitle.value;
        //set event Date..
        var event = new Date(eventDate.value);
        //set event Time..
        eventTime = eventTime.value;
        var hours = eventTime.split(':')[0];
        var minutes = eventTime.split(':')[1];
        event.setHours(hours,minutes,0,0);
        // get event time since 1970 ..
        function eventTimeBySecondsFunction(){
            let eventTimeBySeconds = event.getTime()/1000;
            return eventTimeBySeconds;
        }
        // get the time left for event
        function reloadTimer(){
            let secondsLeft = Math.floor((eventTimeBySecondsFunction()-currentTimeBySecondsFunction())%60);
            secondsLeft = secondsLeft.toString();
            let minutesLeft = Math.floor(((eventTimeBySecondsFunction()-currentTimeBySecondsFunction())/60)%60);
            minutesLeft = minutesLeft.toString();
            let hoursLeft = Math.floor(((eventTimeBySecondsFunction()-currentTimeBySecondsFunction())/60/60)%24);
            hoursLeft = hoursLeft.toString();
            let daysLeft = Math.floor((eventTimeBySecondsFunction()-currentTimeBySecondsFunction())/60/60/24);
            daysLeft = daysLeft.toString();
            if(daysLeft<0){daysLeft='0'}
            if(hoursLeft<0){hoursLeft='0'}
            if(minutesLeft<0){minutesLeft='0'}
            if(secondsLeft<0){
                secondsLeft='0'
                countdown.style.display = 'none';
                eventStarted.style.visibility = 'visible';
            }
            document.getElementById('seconds').innerHTML = secondsLeft.padStart(2,'0');
            document.getElementById('minutes').innerHTML = minutesLeft.padStart(2,'0');
            document.getElementById('hours').innerHTML = hoursLeft.padStart(2,'0');
            document.getElementById('days').innerHTML = daysLeft.padStart(2,'0');
        }
        setInterval(reloadTimer,1000);
    }
})

// making big changes now !
// hehe
// hellos