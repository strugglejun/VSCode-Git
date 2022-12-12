window.addEventListener('load', function () {
    // 格式： 当前时间：2022年10月27-0时54分14秒
    // 定义一个定时器
    let showTime = document.querySelector('.showTime');
    let timer = null;
    timer = setTimeout(time, 1000);
    function time() {
        //清除定时器
        // window.clearTimeout(timer);
        var data = new Date();
        // 获取年月日 时分秒
        let year = data.getFullYear();
        let month = data.getMonth() + 1;
        let day = data.getDate();
        let hours = data.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = data.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = data.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        showTime.innerHTML = '当前时间：' + year + "年" + month + "月" + day + "日" + "-" + hours + "时" + minutes + "分" + seconds + "秒";
        timer = setTimeout(time, 1000);
    }
})