// تعيين تاريخ انتهاء الامتحان (سنة، شهر-1، يوم، ساعة، دقيقة)
// ملاحظة: شهر فبراير هو 1، مارس هو 2.. إلخ
const examEndTime = new Date("February 13, 2026 21:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = examEndTime - now;

    // حساب الوقت
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // عند انتهاء الوقت
    if (distance < 0) {
        clearInterval(countdown);
        showSolution();
    }
}, 1000);

function showSolution() {
    document.getElementById("timer-page").style.display = "none";
    document.getElementById("solution-page").style.display = "block";
}
