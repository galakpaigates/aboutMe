document.addEventListener("DOMContentLoaded", (event) => {

    const notice = document.getElementById("notice");
    const noticeH1 = document.getElementById("noticeH1");
    const timeout = 500;
    
    setTimeout(() => {
        notice.innerHTML = `<h1>Lol!</h1>`;
    }, timeout);

    setTimeout(() => {
        notice.remove();
    }, timeout+timeout);
});