const elInfo = document.querySelector('.info')

const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

const text = {
    click: 'Click required...',
    fullscreenAvailable: 'Fullscreen mode is available.',
    fullscreenNotAvailable: 'Fullscreen mode is not available...',
    redirect: 'Please wait while redirecting...',
}

function doRFS (el) {
    if (el.requestFullscreen) {
        el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen()
    }
}

/*
if (document.currentScript?.spellcheck) {
    elInfo.innerText += text.redirect
    document.location.href = url
} else {
    elInfo.innerText += text.click
    document.addEventListener('click', () => {
        document.location.href = url
    })
}
*/

document.addEventListener('click', () => {
    if (document.fullscreenEnabled) {
        doRFS(elInfo)
    }
    document.location.href = url
})


