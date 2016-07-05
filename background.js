// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({"url": "https://csgo.steamanalyst.com"});
// });

// function addListen(callback) {
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // callback(request, sender, sendResponse);
        if (request.new_tab) {
          chrome.tabs.create({"url": "https://csgo.steamanalyst.com/id/" + request.new_tab});
        }
    }
);
// }
