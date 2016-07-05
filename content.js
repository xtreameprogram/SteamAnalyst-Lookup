var host = location.host.toLowerCase();
if (host === "csgolounge.com") {
    csgolounge();
} else if (host === "csgotraders.net") {
    csgotraders();
} else if (host === "csgo.steamanalyst.com") {
    steamAnalyst();
}

function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];

    return null;
}

function steamAnalyst() {
    var re = /\$([\d|\.]*)/;
    var value = parseFloat($('.fn').children().children().eq(0).html().match(re)[1]);
    var fnFloat = parseFloat($('.mw').children().children().eq(0).html().match(re)[1]);
    var mwFloat = parseFloat($('.ft').children().children().eq(0).html().match(re)[1]);
    var ftFloat = parseFloat($('.ww').children().children().eq(0).html().match(re)[1]);
    var wwFloat = parseFloat($('.fn').children().children().eq(0).html().match(re)[1]);
    var bsFloat = parseFloat($('.fn').children().children().eq(0).html().match(re)[1]);
    $('.fn').children().children().eq(0).html($('.fn').children().children().eq(0).html() + " | " + fnFloat + " (" + Math.round((fnFloat*.8)/2.5) + " Keys)");
    $('.mw').children().children().eq(0).html($('.mw').children().children().eq(0).html() + " | " + mwFloat + " (" + Math.round((mwFloat*.8)/2.5) + " Keys)");
    $('.ft').children().children().eq(0).html($('.ft').children().children().eq(0).html() + " | " + ftFloat + " (" + Math.round((ftFloat*.8)/2.5) + " Keys)");
    $('.ww').children().children().eq(0).html($('.ww').children().children().eq(0).html() + " | " + wwFloat + " (" + Math.round((wwFloat*.8)/2.5) + " Keys)");
    $('.bs').children().children().eq(0).html($('.bs').children().children().eq(0).html() + " | " + bsFloat + " (" + Math.round((bsFloat*.8)/2.5) + " Keys)");
}


function csgotraders() {
    $('.steamitem-wrapper').click(function(event) {
        if (findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname"))) {
            chrome.runtime.sendMessage({
                "new_tab": findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname")).data
            });
        }

        console.log(findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname")));
    });
}

function csgolounge() {
    $('.smallimg').click(function(event) {
        if (findElement(weapons.weapons, "value", $(this).attr("alt")).data) {
            chrome.runtime.sendMessage({
                "new_tab": findElement(weapons.weapons, "value", $(this).attr("alt")).data
            });
        }
        console.log(findElement(weapons.weapons, "value", $(this).attr("alt")).data);
    });
}
