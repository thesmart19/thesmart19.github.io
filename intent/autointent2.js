var urlTabNew = 'https://www.google.com/search?q=new+tab';
var urlTabCurrent = 'https://www.google.com/search?q=current+tab';
urlTabNew = 'intent://' + urlTabNew.replace(/^(http(s)?(:)?)?\/\//, "") + '#Intent;scheme=https;package=com.android.chrome;end';
var regex = {
    fbmessenger: '(FBAN\\/MessengerForiOS|FB_IAB\\/MESSENGER);FBAV\\/(\\d+)(?:.(\\d+)(?:.(\\d+)|)|)',
    fb: 'FB.*;(FBAV)\\/(\\d+)(?:.(\\d+)|)(?:.(\\d+)|)',
    instagram: 'Mozilla.*Mobile.*(Instagram).(\\d+).(\\d+).(\\d+)',
    webview: 'webview|; wv\\).+(Chrome)\\/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)'
};
function is(pattern) {
    return Boolean(navigator.userAgent.match(new RegExp(pattern, 'ig')));
}
var isFBMessenger = is(regex.fbmessenger);
var isFB = is(regex.fb) && !isFBMessenger;
var isInstagram = is(regex.instagram);
var isWebview = is(regex.webview) && !isFBMessenger && !isFB && !isInstagram;
function redirectTabCurrent() {
    if (!document.hidden) {
        document.location.replace(urlTabCurrent);
    }
}
function init() {
    if (isFBMessenger || isFB || isWebview) {
        document.location.href = urlTabNew;
        document.addEventListener('visibilitychange', redirectTabCurrent);
        var timeoutId = setTimeout(function() {
            clearTimeout(timeoutId);
            redirectTabCurrent();
        }, 5000);
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}