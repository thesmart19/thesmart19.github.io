const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

const text = {
    click: 'Click required...',
    fullscreenAvailable: 'Fullscreen mode is available.',
    fullscreenNotAvailable: 'Fullscreen mode is not available...',
    redirect: 'Please wait while redirecting...',
}

if (document.currentScript?.spellcheck) {
    document.querySelector('.info').innerText += text.redirect
    document.location.href = url
} else {
    document.querySelector('.info').innerText += text.click
    document.addEventListener('click', () => {
        document.location.href = url
    })
}

if (document.fullscreenEnabled) {
    document.querySelector('.info').innerText += text.fullscreenAvailable
} else {
    document.querySelector('.info').innerText += text.fullscreenNotAvailable
}
