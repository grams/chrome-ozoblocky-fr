const script_tag = document.createElement('script');
// TODO: add "inject.js" to web_accessible_resources in manifest.json
script_tag.src = chrome.extension.getURL('inject.js');
script_tag.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(script_tag);
