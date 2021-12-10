/* UI Autohide */
// Source: https://theonlytutorials.com/hide-div-mouse-inactive-5-seconds-show-mouse-active/

let setupUiHide = () => {

    let _delay
    let timedelay = 1;

    let delayCheck = () => {
        if (timedelay === 7) {
            $('#container').fadeOut()
            $('.footer').fadeOut()
            timedelay = 1
        }
        timedelay = timedelay + 1
    }

    $(document).mousemove(() => {
        $('#container').fadeIn()
        $('.footer').fadeIn()
        timedelay = 1
        clearInterval(_delay)
        _delay = setInterval(delayCheck, 500)
    });
    
    // page loads starts delay timer
    _delay = setInterval(delayCheck, 500)

}