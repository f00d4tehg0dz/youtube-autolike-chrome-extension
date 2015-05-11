chrome.runtime.onMessage.addListener(function(request, sender, sendResponse, tab) {
    //console.log("URL CHANGED: " + request.data.url);

    (function() {
        // load my inject.js into the webpage and then append it.
        // used http://stackoverflow.com/questions/10527625/google-chrome-extension-script-injections as reference
        var a = document.createElement('script');
        a.src = chrome.extension.getURL("src/inject/inject.js");
        a.onload = a.remove;
        (document.head || document.documentElement).appendChild(a);
    })();

});