document.addEventListener("DOMContentLoaded",() => {
    function update_time(){
        const display_time = document.querySelector(".time_display");
        const now = new Date();
        const Hours = now.getHours().toString().padStart(2, "0");
        const Minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const time = `${Hours}:${Minutes}:${seconds}`;
        display_time.textContent = time;
    }

    // function update_day(){
    //     const day = new Date();
    //     const today = day.getDay();
    //     const date = day.getDate();
    //     const month = day.getMonth();
    //     const year = day.getFullYear();

    //     const Day = `${date},${day},${month},${year}`;
    //     const display_day = document.querySelector(".day");
    //     display_day.textContent = today;
    // }
    
    setInterval(() => {
        update_time();
        // update_day();
    }, 1000);
})


// setInterval(() => {
//     const now = new Date();
//     const Hours = now.getHours().toString().padStart(2, "0");
//     const Minutes = now.getMinutes().toString().padStart(2, "0");
//     const seconds = now.getSeconds().toString().padStart(2, "0");
//     const time = `${Hours}:${Minutes}:${seconds}`;
//     console.log(time);
// }, 1000);




