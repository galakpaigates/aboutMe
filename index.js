document.addEventListener("DOMContentLoaded", (event) => {

    const notice = document.getElementById("notice");
    const noticeH1 = document.getElementById("noticeH1");
    const timeout = 1000;
    
    setTimeout(() => {
        notice.innerHTML = `<h1>Lol!</h1>`;
    }, timeout+timeout+timeout);

    setTimeout(() => {
        notice.remove();
    }, timeout+timeout+timeout+timeout);
});