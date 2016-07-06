// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({"url": "https://csgo.steamanalyst.com"});
// });

// function addListen(callback) {
var currencies;

$.ajax({
    type: "GET",
    url: "http://api.fixer.io/latest?base=USD",
    timeout: 10000,
    success: function(data) {
        data.rates.USD = 1;
        currencies = data;
    }
});


var quicksellData;
var steamanalyst;
chrome.storage.sync.get("steamanalyst", function(data) {
  steamanalyst = false;
    if (data.steamanalyst) {
        steamanalyst = true;
        chrome.storage.sync.get("quicksell", function(data) {
          quicksellData = data.quicksell;
        });
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // callback(request, sender, sendResponse);
        chrome.storage.sync.get("steamanalyst", function(data) {
          steamanalyst = false;
            if (data.steamanalyst) {
                steamanalyst = true;
                chrome.storage.sync.get("quicksell", function(data) {
                  quicksellData = data.quicksell;
                });
            }
        });
        if (request.new_tab) {
            chrome.tabs.create({
                "url": "https://csgo.steamanalyst.com/id/" + request.new_tab
            });
        }
        if (request.method == "steamanalyst") {
          sendResponse({steamanalyst: steamanalyst, quicksell: quicksellData, currencies: currencies});
        }
        if (request.changeSetting) {
          quicksellData = request.quicksell;
          steamanalyst = request.steamanalyst;
        }
    }
);
// }
