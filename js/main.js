function mytime()
{
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if( hr < 10)
        {
            hr = '0' + hr
        }
    if( hr > 12)
        {
            hr = "PM " + hr
        }
    if( hr < 12)
    {
        hr = "AM " + hr
    }
    if( min < 10)
        {
            min = '0' + min
        }
    if( sec < 10)
        {
            sec = '0' + sec
        }
    document.getElementById('mytime').innerHTML = hr + ':' + min + ':' + sec;
}
window.onload = function()
{
    setInterval(mytime,500)
}