window.onload = function () {
    var span1 = document.getElementsByTagName("span1")[0];
    console.log(span1);
    var btn = document.getElementsByTagName("a")[0];
    //拿到所有文字
    var str = span1.innerHTML;
    //设置一个开关，记录展开和收缩
    var isOn = true;
    //btn添加事件，在事件里修改span1文字
    btn.onclick = function () {
        //点击按钮的时候改变开关的值
        isOn = !isOn;
        if (isOn == true) {
            span1.innerHTML = str;
            btn.innerHTML = "收缩";
        } else {
            //收缩
            span1.innerHTML = str.substring(0, 100) + "...";
            btn.innerHTML = "展开";
        }
    }
}
