Template.addingdetails.rendered = function(){
        $('.input_starttime').clockpicker({
            default: 'now',           // default time, 'now' or '13:14' e.g.
            fromnow: 0,            // set default time to * milliseconds from now
            donetext: 'Done',      // done button text
            autoclose: true,      // auto close when minute is selected
            ampmclickable: false,  // set am/pm button on itself
            darktheme: true,      // set to dark theme
            twelvehour: true,      // change to 12 hour AM/PM clock from 24 hour
            vibrate: true          // vibrate the device when dragging clock hand
                });
}