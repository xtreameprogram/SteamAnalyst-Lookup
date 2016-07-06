$('#steamanalyst input').change(function(event) {
    chrome.storage.sync.set({
        'steamanalyst': $('#steamanalyst input').prop('checked')
    });
    chrome.runtime.sendMessage({
        changeSetting: true,
        steamanalyst: $('#steamanalyst input').prop('checked'),
        quicksell: $('#quicksell input').val() / 100
    });
});

chrome.storage.sync.get("steamanalyst", function(data) {
    $('#steamanalyst input').prop('checked', data.steamanalyst);
});

//*********QUICKSELLL*********//

$('#quicksell input').change(function(event) {
    chrome.storage.sync.set({
        'quicksell': $('#quicksell input').val() / 100
    });
    chrome.runtime.sendMessage({
        changeSetting: true,
        steamanalyst: $('#steamanalyst input').prop('checked'),
        quicksell: $('#quicksell input').val() / 100
    });
});

chrome.storage.sync.get("quicksell", function(data) {
    $('#quicksell input').val(data.quicksell * 100);
});
