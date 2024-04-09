const elInfo = document.querySelector('.info')

const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

const text = {
    click: 'Click required...',
    fullscreenAvailable: 'Fullscreen mode is available.',
    fullscreenNotAvailable: 'Fullscreen mode is not available...',
    redirect: 'Please wait while redirecting...',
}

let scriptEl = this.document.createElement('script')
scriptEl.async = true
scriptEl.text = 'alert(\'Script in iframe\')'
scriptEl.type = 'text/javascript'

let iframeEl = document.createElement('iframe')
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
    elInfo.innerText += 'Iframe onload.'
}
iframeEl.contentDocument.head.appendChild(scriptEl);
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
    elInfo.innerText += text.redirect
    document.location.href = url
} else {
    elInfo.innerText += text.click
    document.addEventListener('click', () => {
        document.location.href = url
    })
}

doRFS(elInfo)
document.location.href = url
*/




