function getBlogRunningTime() {
    // 設定博客創建日期（自行替換為你的日期）
    const startDate = new Date("2025-04-05"); // 例如 2023年1月1日
    const currentDate = new Date();
    
    // 計算時間差（毫秒）
    const timeDiff = currentDate - startDate;
    
    // 轉換為天、月、年
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;
    
    // 更新到頁面
    const timerElement = document.getElementById("running-time");
    if (timerElement) {
        timerElement.innerHTML = `${years} 年 ${months} 月 ${remainingDays} 天`;
    }
}

// 頁面加載時執行
window.onload = function() {
    getBlogRunningTime();
    // 可選：每秒更新一次
    setInterval(getBlogRunningTime, 1000);
};