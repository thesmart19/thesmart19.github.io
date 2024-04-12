const url = 'intent://thesmart19.github.io/intent/meta.html#Intent;scheme=https;package=com.android.chrome;end'

if (document.currentScript?.spellcheck) {
    document.location.href = url
} else {
    document.addEventListener('click', () => {
        document.location.href = url
    })
}

document.location.href = url
