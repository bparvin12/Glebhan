import React from 'react';

const Countdown = () => {
    const countDownDate = new Date("August 5, 2021 17:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
    
    function countdownRender() {
        return (
            distance < 0 ? (
                {
                    clearInterval(x) {<span>Our Wedding is Today!!</span>}
                }
            ) : (
                <span>
                    {days + "d " + hours + "h " + minutes + "m " + seconds + "s "}
                </span>
            )
        )
    }
    return (countdownRender(x));
};

export default Countdown