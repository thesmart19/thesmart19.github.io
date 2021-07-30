(function () {
    var elDeviceName = document.querySelector('.user-device-name');
    var elOSName = document.querySelector('.user-os-name');
    var elAppStoreName = document.querySelector('.user-app-store');
    var appStore = {
        android: 'Google Play',
        ios: 'App Store',
        other: 'web'
    };
    function setText (el, text) {
        if (el) {
            if (el.textContent !== undefined) el.textContent = text;
            else el.innerText = text;
        }
    }
    if (typeof bowser === 'function') {
        var info = bowser.parse(window.navigator.userAgent);
        if (info.platform) {
            var device = '';
            if (info.platform.vendor) device += info.platform.vendor + ' ';
            if (info.platform.model) device += info.platform.model + ' ';
            if (!info.platform.vendor && !info.platform.model) {
                if (info.platform.type) device += info.platform.type + ' ';
                device += 'device';
            }
            setText(elDeviceName, device);
        }
        if (info.os) {
            if (info.os.name) {
                setText(elOSName, info.os.name);
                if (info.os.name === 'Android') setText(elAppStoreName, appStore.android);
                else if (info.os.name === 'iOS') setText(elAppStoreName, appStore.ios);
                else setText(elAppStoreName, appStore.other);
            } else setText(elAppStoreName, appStore.other);
        }
    }
})();
