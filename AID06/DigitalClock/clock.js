// 時計の描画処理をスタート
clock();

function clock () {
    // 現在日時を取得
    let d = new Date();

    // デジタル時計を更新
    updateDigitalClock(d);

    // 次の「0ミリ秒」に実行されるよう、次の描画処理を予約
    let delay = 1000 - new Date().getMilliseconds();
    setTimeout(clock, delay);
}

function updateDigitalClock (d) {
    const AA_str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let YY = d.getFullYear().toString().slice(-2);
    let MM = d.getMonth() + 1;
    let DD = d.getDate();
    let AA= d.getDay();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    // 桁あわせ
    if(MM < 10) { MM = "0" + MM; }
    if(DD < 10) { DD = "0" + DD; }
    if(hh < 10) { hh = "0" + hh; }
    if(mm < 10) { mm = "0" + mm; }
    if(ss < 10) { ss = "0" + ss; }

    let text = YY + '/' + MM + '/' + DD + '(' + AA_str[AA] + ')<br>’+ hh + ’:'
        + mm + ':' + ss;
    document.getElementById("digital_clock").innerHTML= text;
}


