<template>
    <div class="coming_soon_page_wrapper">
        <div class="coming_soon_page_content">
            <p>Coming Soon</p>
            <hr>
            <div class="date_countdown">
                <div id="timer"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        // Set the date to be counted down to
        var count_down_date = new Date("Jul 5, 2026 17:30:00").getTime();
        // Update the count down every 1 second
        var count_down_function = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = count_down_date - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        if(document.getElementById("timer")) {
            document.getElementById("timer").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
        }
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(count_down_function);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
        }, 1000);
    }
}
</script>

<style scoped>
.coming_soon_page_wrapper {
    font-family: 'Roboto Slab', serif;
    color: var(--navy);
    height: 100%;
    padding-top: 30px;
    padding-bottom: 20px;
    animation: slide_in 2.5s ease;
}

.coming_soon_page_content {
    padding: 30px 40px;
    border-radius: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    font-size: 50px;
    font-family: 'Roboto Slab', serif;
}

hr {
    width: 40%;
    margin: 30px 0;
}

#timer {
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
    width: 500px;
    display: flex;
    justify-content: center;
}

.date_countdown {
    animation: slide_down 1.5s ease;
}

@keyframes slide_down {
    0% {
        opacity: 0;
        transform: translateY(-10000px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>