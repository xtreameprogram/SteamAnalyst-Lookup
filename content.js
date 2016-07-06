var host = location.host.toLowerCase();
var currencies;
if (host === "csgolounge.com") {
    csgolounge();
} else if (host === "csgotraders.net") {
    csgotraders();
} else if (host === "csgo.steamanalyst.com") {
    chrome.runtime.sendMessage({
        method: "steamanalyst",
        currencies: true
    }, function(response) {
        if (response.steamanalyst) {
            currencies = response.currencies.rates;
            steamAnalystPlus(response.quicksell);
        }
    });
}


function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];

    return null;
}

function steamAnalystPlus(percent) {

    var currencySAP = $('#currencyL > h1').html().match(/(...)/)[0];
    var currencySign = $('#currencyL > h1').html().match(/...\s(.*)/)[1];
    if (currencySAP.toLowerCase() === "usd" || currencySAP.toLowerCase() === "gbp" || currencySAP.toLowerCase() === "brl" || currencySAP.toLowerCase() === "cad" || currencySAP.toLowerCase() === "krw" || currencySAP.toLowerCase() === "try" || currencySAP.toLowerCase() === "mxn" || currencySAP.toLowerCase() === "idr" || currencySAP.toLowerCase() === "myr" || currencySAP.toLowerCase() === "php" || currencySAP.toLowerCase() === "sgd" || currencySAP.toLowerCase() === "thb" || currencySAP.toLowerCase() === "aud" || currencySAP.toLowerCase() === "nzd" || currencySAP.toLowerCase() === "dkk" || currencySAP.toLowerCase() === "sek" || currencySAP.toLowerCase() === "zar") {
        var refn;
        var remw;
        var reft;
        var reww;
        var rebs;
        try {
            refn = new RegExp(currencySign.regexify() + "\\s*([\\d|\\.|\\,]*)");
        } catch (err) {
            console.log(err);
        }
        try {
            remw = new RegExp(currencySign.regexify() + "\\s*([\\d|\\.|\\,]*)");
        } catch (err) {
            console.log(err);
        }
        try {
            reft = new RegExp(currencySign.regexify() + "\\s*([\\d|\\.|\\,]*)");
        } catch (err) {
            console.log(err);
        }
        try {
            reww = new RegExp(currencySign.regexify() + "\\s*([\\d|\\.|\\,]*)");
        } catch (err) {
            console.log(err);
        }
        try {
            rebs = new RegExp(currencySign.regexify() + "\\s*([\\d|\\.|\\,]*)");
        } catch (err) {
            console.log(err);
        }


        if ($('#leftCol').attr("class") !== "toggle") {
            $('#collapseLmenu').click();
        }
        try {
            var fnFloat = Math.ceil((parseFloat($('.fn').children().children().eq(0).html().match(refn)[1].toArray().removeCharacter(',').arrToString()) * percent) * 100) / 100;
            $('.fn').children().children().eq(0).html($('.fn').children().children().eq(0).html() + " | " + currencySign + fnFloat.commafy() + " (" + Math.round((fnFloat) / (currencies[currencySAP] * 2.5)) + " Keys)");
        } catch (err) {
            console.log(err);
        }
        try {
            var mwFloat = Math.ceil((parseFloat($('.mw').children().children().eq(0).html().match(remw)[1].toArray().removeCharacter(',').arrToString()) * percent) * 100) / 100;
            $('.mw').children().children().eq(0).html($('.mw').children().children().eq(0).html() + " | " + currencySign + mwFloat.commafy() + " (" + Math.round((mwFloat) / (currencies[currencySAP] * 2.5)) + " Keys)");
        } catch (err) {
            console.log(err);
        }
        try {
            var ftFloat = Math.ceil((parseFloat($('.ft').children().children().eq(0).html().match(reft)[1].toArray().removeCharacter(',').arrToString()) * percent) * 100) / 100;
            $('.ft').children().children().eq(0).html($('.ft').children().children().eq(0).html() + " | " + currencySign + ftFloat.commafy() + " (" + Math.round((ftFloat) / (currencies[currencySAP] * 2.5)) + " Keys)");
        } catch (err) {
            console.log(err);
        }
        try {
            var wwFloat = Math.ceil((parseFloat($('.ww').children().children().eq(0).html().match(reww)[1].toArray().removeCharacter(',').arrToString()) * percent) * 100) / 100;
            $('.ww').children().children().eq(0).html($('.ww').children().children().eq(0).html() + " | " + currencySign + wwFloat.commafy() + " (" + Math.round((wwFloat) / (currencies[currencySAP] * 2.5)) + " Keys)");
        } catch (err) {
            console.log(err);
        }
        try {
            var bsFloat = Math.ceil((parseFloat($('.bs').children().children().eq(0).html().match(rebs)[1].toArray().removeCharacter(',').arrToString()) * percent) * 100) / 100;
            $('.bs').children().children().eq(0).html($('.bs').children().children().eq(0).html() + " | " + currencySign + bsFloat.commafy() + " (" + Math.round((bsFloat) / (currencies[currencySAP] * 2.5)) + " Keys)");
        } catch (err) {
            console.log(err);
        }
    }
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



/***************PROTOYPES***************/

String.prototype.regexify = function() {
    var newd = "";
    for (var i = 0; i < this.length; i++) {
        newd += '\\' + this[i];
    }
    return newd;
};

Array.prototype.removeCharacter = function(character) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === character) {
            this.splice(i, 1);
        }
    }
    return this;
};

String.prototype.toArray = function() {
    var r = [];
    for (var i = 0; i < this.length; i++) {
        r.push(this[i]);
    }
    return r;
};

Array.prototype.arrToString = function() {
    return this.join('');
};

Number.prototype.commafy = function () {
    var str = this.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
};
