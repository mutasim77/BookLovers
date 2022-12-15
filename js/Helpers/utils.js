//? timer for HOME page;
export function timer() {
    let sec = 60, min = 15;

    setInterval(() => {
        if (sec <= 0) {
            sec = 60;
            --min;
        }
        sec < 10 ? $('.coundown-timer span').text(`23 : 18 : ${min} : 0${sec}`) : $('.coundown-timer span').text(`23 : 18 : ${min} : ${sec}`);
        --sec;

    }, 1000)
}