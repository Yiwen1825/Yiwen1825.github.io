function getBlogRunningTime() {
    const startDate = new Date("2025-04-05");
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate(); // 上個月的天數
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const timerElement = document.getElementById("running-time");
    if (timerElement) {
        timerElement.innerHTML = `${years} 年 ${months} 月 ${days} 天`;
    }
}

window.onload = function() {
    getBlogRunningTime();
    setInterval(getBlogRunningTime, 3600000);
};