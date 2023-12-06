export default function startTime() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    h = correctFormat(h);
    m = correctFormat(m);
    s = correctFormat(s);

    document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
    setTimeout(startTime, 1000);
};

function correctFormat(i) {
    if (i < 10) {i = '0' + i;};
    return i;
};
