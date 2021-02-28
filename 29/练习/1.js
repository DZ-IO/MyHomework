document.cookie = 'uid=1';
var now = new Date();
now.setTime(now.getTime() + 60 * 1000);
document.cookie = 'token=divsdvfd;expires=' + now.toUTCString();
document.write(document.cookie)
