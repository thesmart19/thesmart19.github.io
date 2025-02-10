(function () {
    var params = ['offer_name', 'target_url', 'key', 'visitor_id', 'cost', 'zoneid', 'campaignid', 'device', 'browser', 'adformat', 'zonetype', 'country', 'language', 'bannerid', 'user_activity', 'pid', 'af_siteid', 'af_click_lookback', 'c', 'clickid'];
    var excludeParams = ['offer_name', 'target_url'];
    var url = new URL(window.location.href);

    function redirect(url) {
        window.location.href = url;
    }

    function getUrlParam(param) {
        return url ? url.searchParams.get(param) : null;
    }

    function getExitUrl(url) {
        var u = new URL(url);

        for (var key in landingParams) {
            if (landingParams[key] && !excludeParams.includes(key)) {
                u.searchParams.set(key, landingParams[key]);
            }
        }

        return decodeURIComponent(u.toString());
    }

    var urlParams = Object.fromEntries(params.map(k => [k, k]));
    var landingParams = Object.fromEntries(params.map(k => [k, getUrlParam(urlParams[k])]));

    window.offerName = landingParams['offer_name'];
    window.targetUrl = landingParams['target_url'];

    if (window.targetUrl) {
        document.addEventListener('click', function () {
            redirect(getExitUrl(window.targetUrl));
        });
    }

    setTimeout(function(){
        document.querySelector('.ui-dialog').classList.add('show');
    }, 500);
})();