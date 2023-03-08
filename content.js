document.onselectionchange = () => {
    var selection = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({ greeting: 'selectionchange', data: selection }, () => {});
};