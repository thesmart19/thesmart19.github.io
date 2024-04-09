const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

const scriptEl = document.createElement('script')
scriptEl.async = true
scriptEl.text = `document.location.href = '${url}'`
scriptEl.type = 'text/javascript'

const iframeEl = document.createElement('iframe')
iframeEl.setAttribute('style',
    `background: transparent !important;
            border: 0 !important;
            display: none !important;;
            font-size: 0 !important;
            height: 0 !important;
            margin: 0 !important;
            max-height: 0 !important;
            max-width: 0 !important;
            opacity: 0 !important;;
            overflow: hidden !important;
            outline: none !important;
            padding: 0 !important;
            pointer-events: none !important;
            width: 0 !important;`)
iframeEl.onload = () => {
    iframeEl.contentDocument.head.appendChild(scriptEl);
}
document.body.appendChild(iframeEl)

/*
function doRFS (el) {
    if (el.requestFullscreen) {
        el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen()
    }
}

if (document.currentScript?.spellcheck) {
    document.location.href = url
} else {
    document.addEventListener('click', () => {
        document.location.href = url
    })
}

doRFS(elInfo)
document.location.href = url
*/




