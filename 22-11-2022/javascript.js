function changetoblue(){
    document.getElementById('test').style.color="blue";
    var count = 0;
    setInterval(function(){
        document.getElementById('test').innerHTML = count++;
    }, 1000);
}