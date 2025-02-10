(function () {
    var DEFAULT_LANGUAGE = 'en';
    var macros = ['{offerName}'];
    var regExp = new RegExp(`${macros[0]}`, 'g');

    function translate (translation, language, offerName) {
        Object.keys(translation[language]).forEach((key) => {
            var nodeList = document.querySelectorAll(`[data-translation='${key}']`);
            nodeList.forEach((n) => {
                n.innerHTML = translation[language][key].replace(regExp, offerName);
            });
        });
    }

    function getLanguageFallback (translation, language) {
        if (typeof translation[language] === 'undefined') {
            language = DEFAULT_LANGUAGE;
        }
        return language;
    }

    function getLanguage (language) {
        return language.split('-')[0];
    }

    fetch('js/translations.json')
        .then(response => response.json())
        .then(translation => {
            var language = getLanguageFallback(translation, getLanguage(navigator.language));
            translate(translation, language, window.offerName);
        })
        .catch((e) => {
            console.log('Error:', e.message);
        });
})();
