const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

const text = {
    click: 'Click required...',
    redirect: 'Please wait while redirecting...',
}

if (document.currentScript?.spellcheck) {
    document.querySelector('.info').innerText = text.redirect
    document.location.href = url
} else {
    document.querySelector('.info').innerText = text.click
    document.addEventListener('click', () => {
        document.location.href = url
        setTimeout(() => {
            document.location.href = url
        }, 250)
    })
}
